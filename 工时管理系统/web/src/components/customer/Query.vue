<template>
<div class="table">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-remind"></i> 客户管理</el-breadcrumb-item>
            <el-breadcrumb-item> 客户查询</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="部门">
                <el-select v-model="formInline.dept" placeholder="请选择">
                    <el-option label="资源一部" value="01"></el-option>
                    <el-option label="资源二部" value="02"></el-option>
                    <el-option label="资源三部" value="03"></el-option>
                    <el-option label="资源四部" value="04"></el-option>
                    <el-option label="全部" value="05"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="客户类别">
                <el-select v-model="formInline.custtype" placeholder="请选择">
                    <el-option label="中国银行" value="01"></el-option>
                    <el-option label="中国人寿" value="02"></el-option>
                    <el-option label="公司内部系统" value="03"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="项目名称">
                <el-select v-model="formInline.customer" placeholder="请选择">
                    <el-option label="中国银行etc项目" value="01"></el-option>
                    <el-option label="中国人寿研发中心一部" value="02"></el-option>
                    <el-option label="中国人寿研发中心二部" value="03"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" @click="dialogFormVisible = true">新增客户</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" border class="table">
            <el-table-column prop="proName" label="项目名称"></el-table-column>
            <el-table-column prop="custtype" label="客户类别"></el-table-column>
            <el-table-column prop="department" label="部门"></el-table-column>
            <el-table-column prop="proAddr" label="办公地址"></el-table-column>
            <el-table-column prop="proManager" label="在场负责人" width="100"></el-table-column>
            <el-table-column prop="proNumber" label="项目人数" width="80"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-edit">编辑</el-button>
                    <el-button type="text" icon="el-icon-delete" class="red">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- dialog -->
        <el-dialog title="新增项目" :visible.sync="dialogFormVisible">
            <el-form :model="form" class="dialog-form-width">
                <el-form-item label="项目名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" ></el-input>
                </el-form-item>
                <el-form-item label="办公地址" :label-width="formLabelWidth">
                    <el-input v-model="form.addr" ></el-input>
                </el-form-item>
                <el-form-item label="在场负责人" :label-width="formLabelWidth">
                    <el-input v-model="form.pm"></el-input>
                </el-form-item>
                <el-form-item label="客户类别" :label-width="formLabelWidth">
                    <el-select v-model="formInline.custtype" placeholder="请选择">
                        <el-option label="中国银行" value="01"></el-option>
                        <el-option label="中国人寿" value="02"></el-option>
                        <el-option label="公司内部系统" value="03"></el-option>
                    </el-select>
                </el-form-item>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
                <el-form-item label="所属部门" :label-width="formLabelWidth">
                    <el-select v-model="formInline.department" placeholder="请选择">
                        <el-option label="软件资源二中心一部" value="01"></el-option>
                        <el-option label="软件资源二中心二部" value="02"></el-option>
                        <el-option label="软件资源二中心三部" value="03"></el-option>
                        <el-option label="软件资源二中心四部" value="04"></el-option>
                        <el-option label="全部" value="05"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</div>
</template>

<script>
import api from '../common/api.js'
export default {
    name: 'basetable',
    data() {
        return {
            date: '',
            tableData: [],
            formInline: {
                user: '',
                time: '',
                department: '',
                type: ''
            },
            workTypeData: [{
                value: '01',
                label: '开发'
            }, {
                value: '02',
                label: '测试'
            }],
            levelData: [{
                value: '01',
                label: '初级'
            }, {
                value: '02',
                label: '中级'
            }, {
                value: '03',
                label: '高级'
            }],
            dialogFormVisible: false,
            form: {
                startDate: '',
                endDate: '',
                region: '',
                desc: ''
            },
            formLabelWidth: '120px'
        }
    },
    created() {
        this.getData();
    },
    methods: {
        // 获取 easy-mock 的模拟数据
        getData() {
            this.$axios.post(api.project.query).then((res) => {
                console.log(res.data);
                this.tableData = res.data.list;
            })
        },
        formatter(row, column) {
            // return row.address;
            return '-';
        }
    }
}
</script>

<style scoped>
.red {
    color: #ff0000;
}
</style>
