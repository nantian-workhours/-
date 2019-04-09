<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-settings"></i> 系统管理</el-breadcrumb-item>
                <el-breadcrumb-item> 参数管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form :inline="true" :model="queryForm" class="demo-form-inline">                
                <el-form-item label="参数类别">
                    <el-select v-model="queryForm.typeCode" clearable :filterable="true">
                        <el-option v-for="item in typeData" :key="item.typeCode" :label="item.typeName" :value="item.typeCode"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="queryByType">查询</el-button>
                    <el-button type="success" @click="dialogTypeAdd = true">添加类别</el-button>
                    <el-button type="danger" @click="dialogSubTypeAdd = true">添加类别子项</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="tableData" border class="table mgb10">
                <el-table-column prop="dicType" label="类别编码"></el-table-column>
                <el-table-column prop="dicTypeChn" label="类别名称" :formatter="typeChnFmt"></el-table-column>
                <el-table-column prop="dicCode" label="子项编码" :formatter="defaultFmt"></el-table-column>
                <el-table-column prop="dicValue" label="子项值" :formatter="defaultFmt"></el-table-column>
                <el-table-column label="操作" width="320" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-remove" class="red" @click="typeDel(scope.$index, scope.row)">删除类别</el-button>
                        <el-button v-if="scope.row.dicCode" type="text" icon="el-icon-delete" class="green" @click="subTypeDel(scope.$index, scope.row)">删除子类</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 添加类别 -->
            <el-dialog title="添加类别" :visible.sync="dialogTypeAdd">
                <el-form :model="typeAddForm" :rules="typeAddFormRules" ref="typeAddForm" :label-width="formLabelWidth" style="width: 600px;">
                    <el-form-item label="类别编号" prop="typeCode">
                        <el-input v-model="typeAddForm.typeCode" placeholder="格式: WORK_TYPE"></el-input>
                    </el-form-item>
                    <el-form-item label="类别名称" prop="typeName">
                        <el-input v-model="typeAddForm.typeName" placeholder="格式: 类别名称"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogTypeAdd = false">取 消</el-button>
                    <el-button type="primary" @click="typeAdd">确 定</el-button>
                </div>
            </el-dialog>
            <!-- 添加子类 -->
            <el-dialog title="添加类别子项" :visible.sync="dialogSubTypeAdd">
                <el-form :model="subTypeAddForm" :rules="subTypeAddFormRules" ref="subTypeAddForm" :label-width="formLabelWidth" style="width: 600px;">
                    <el-form-item label="参数类别" prop="dicType">
                        <el-select v-model="subTypeAddForm.dicType" :filterable="true">
                            <el-option v-for="item in typeData" :key="item.typeCode" :label="item.typeName" :value="item.typeCode"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="类别子项编码" prop="dicCode">
                        <el-input v-model="subTypeAddForm.dicCode" placeholder="格式: M/F"></el-input>
                    </el-form-item>
                    <el-form-item label="类别子项名称" prop="dicValue">
                        <el-input v-model="subTypeAddForm.dicValue" placeholder="格式: 男/女"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogSubTypeAdd = false">取 消</el-button>
                    <el-button type="primary" @click="subTypeAdd">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import api from '../common/api.js'
import axios from 'axios';
export default {
    name: 'basetable',
    data() {
        return {            
            queryForm: {}, // 查询表单
            typeData: [{typeCode: '', typeName: ''}], // 类别数据
            tableData: [], // table数据
            typeAddForm: { // 类别添加form
                typeCode: '',
                typeName: ''
            },
            subTypeAddForm: { // 子类添加form
                dicType: '',
                dicCode: '',
                dicValue: ''
            },
            typeAddFormRules: {
                typeCode: [
                    { required: true, message: '请填写类别编码', trigger: 'change' }
                ],
                typeName: [
                    { required: true, message: '请填写类别名称', trigger: 'change' }
                ]
            },
            subTypeAddFormRules: {
                dicType: [
                    { required: true, message: '请选择参数类别', trigger: 'blur' }
                ],
                dicCode: [
                    { required: true, message: '请填写子类编码', trigger: 'blur' }
                ],
                dicValue: [
                    { required: true, message: '请填写子类名称', trigger: 'blur' }
                ]
            },
            editFlag: false,
            dialogTypeAdd: false, // 添加类别框
            dialogSubTypeAdd: false, // 添加子类框
            formLabelWidth: '120px' // 表单lable项宽度
        }
    },
    created() {
        // 查询所有参数数据
        this.initData();
    },
    methods: {
        queryByType() {
            let _typeCode = this.queryForm.typeCode;
            if(!_typeCode) {
                this.initData();
                return;
            };
            // 发送请求
            this.$axios.get(api.params.subTypeQuery + '?dicType=' + _typeCode).then(res => {
                if(res.code === 200) {
                    if(res.data.res.length) {
                        this.tableData = res.data.res;
                    } else {
                        this.tableData = [{
                            'dicType': _typeCode
                        }];
                    }
                } else {
                    this.$message(res.message);
                }
            })
        },
        // 入口, 初始化数据
        initData(){
            // 同时查询
            axios.all([this.typeQuery(), this.subTypeQuery()])
            .then(axios.spread((typeData, subTypeData) => {
                if(typeData.code ===200 && subTypeData.code ===200) {
                    // 类别数据
                    this.typeData = typeData.data.res;
                    // 子类数据
                    this.formatTableData(subTypeData.data.res, typeData.data.res);
                    // this.tableData = subTypeData.data.res;
                } else {
                    typeData.code !== 200 &&　this.$message(typeData.message);
                    subTypeData.code !== 200 &&　this.$message(subTypeData.message);
                }
            }))
        },
        // 格式化table显示数据
        formatTableData(subTypeData, typeData) {
            if(!typeData.length) {
                return subTypeData || [];
            }
            let res = [];
            // 过滤typeData, [{},{}] => ['typeCode', 'typeCode']
            let _subTypeArray = subTypeData.map(item => {
                return item.dicType;
            })
            // 遍历类别(typeData), 与子类(subTypeData)做比较,
            // 过滤出子类中没有的类别, 存入res中
            typeData.forEach(item => {
                if(_subTypeArray.indexOf(item.typeCode) === -1) {
                    res.push({'dicType': item.typeCode})
                }
            })
            res = res.concat(subTypeData);
            // 得到最终的table数据
            this.tableData = res;
        },
        // 查询所有类别
        typeQuery() {
            return this.$axios.get(api.params.typeQuery);
        },
        // 查询所有子类
        subTypeQuery() {
            return this.$axios.get(api.params.subTypeQuery);
        },
        // 添加类别
        typeAdd() {
            // 校验
            this.$refs.typeAddForm.validate((valid) => {
                if (valid) {
                    typeAddRequest.call(this);
                }
            });
            // 发送添加类别请求
            function typeAddRequest() {
                let _form = this.typeAddForm;
                let _data = {
                    typeCode: _form.typeCode,
                    typeName: _form.typeName
                };
                this.$axios.post(api.params.typeAdd, _data).then(res => {
                    if(res.code === 200) {
                        this.$message({
                            message: '类别添加成功',
                            type: 'success'
                        });
                        // 再次查询
                        this.updateTable();
                    } else {
                        this.$message.error("类别添加失败");
                    }
                    // 隐藏dialog                
                    this.dialogTypeAdd = false;
                }); 
            }
        },
        // 添加子类
        subTypeAdd() {
            // 校验
            this.$refs.subTypeAddForm.validate((valid) => {
                if (valid) {
                    subTypeRequest.call(this);
                }
            });
            // 发送添加类别请求
            function subTypeRequest() {
                let _formData = this.subTypeAddForm;
                this.$axios.post(api.params.subTypeAdd, _formData).then(res => {
                    if(res.code === 200) {
                        this.$message({
                            message: '子类别添加成功',
                            type: 'success'
                        });
                        // 再次查询
                        this.updateTable();
                    } else {
                        this.$message.error("子类别添加失败");
                    }
                    // 隐藏dialog                
                    this.dialogSubTypeAdd = false;
                }); 
            }
        },
        // 删除类别
        typeDel(index, row) {
            let _dicType = row.dicType;
            let _dicCode = row.dicCode;
            // 确认提示
            this.$confirm('本操作会删除类别 "'+ row.dicType +'"及其所有子类, 确定要继续删除吗?', '提示').then(() => {
                this.deleteTypeRequest(api.params.typeDelete + '?typeCode=' + _dicType);
                _dicCode && this.deleteTypeRequest(api.params.subTypeDeleteByDicType + '?dicType=' + _dicType);
            });
        },
        // 删除子类
        subTypeDel(index, row) {
            let _dicCode = row.dicCode;
            // 确认提示
            this.$confirm('确定要进行删除子类 "'+ _dicCode + '"吗?', '提示').then(() => {
                this.deleteTypeRequest(api.params.subTypeDelete + '?dicCode=' + _dicCode);
            });
        },
        // 删除类别+子类请求
        deleteTypeRequest(url) {
            this.$axios.post(url).then(res => {
                if(res.code === 200) {
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                    // 再次查询
                    this.updateTable();
                } else {
                    this.$message.error("删除失败");
                }
            });
        },
        // 更新table表数据
        updateTable(){
            this.initData();
        },
        // 类别格式化-中文显示
        typeChnFmt(row, cell) {
            // 获取类别编码
            let _dicType = row.dicType;
            // 遍历类别字段,找到对应的类别编码字段
            let res = this.typeData.filter(item => {
                return item.typeCode === _dicType;
            });
            // 返回类别中文
            return res.length ? res[0].typeName : '-';
        },
    },
    watch: {
        dialogTypeAdd(val) {
            val && this.$refs.typeAddForm &&　this.$refs.typeAddForm.resetFields();
        },
        dialogSubTypeAdd(val) {
            if(this.editFlag) return;
            val && this.$refs.subTypeAddForm &&　this.$refs.subTypeAddForm.resetFields();
        }
    }
}
</script>

<style scoped>
</style>
