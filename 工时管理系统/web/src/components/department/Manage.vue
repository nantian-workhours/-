<template>
<div class="table">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-remind"></i> 部门管理</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <div class="mgb10">
            <el-button type="danger" @click="dialogFormVisible = true">新增部门</el-button>
        </div>
        <el-table :data="tableData" border class="table">
            <el-table-column prop="name" label="部门名称"></el-table-column>
            <el-table-column prop="abbreviation" label="部门简称"></el-table-column>
            <el-table-column prop="manager" label="部门负责人"></el-table-column>
            <el-table-column prop="assistant" label="部门助理"></el-table-column>
            <el-table-column prop="servicetype" label="服务类别"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-edit">编辑</el-button>
                    <el-button type="text" icon="el-icon-delete" class="red">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- dialog -->
        <el-dialog title="新增部门" :visible.sync="dialogFormVisible">
            <el-form :model="form" class="dialog-form-width">
                <el-form-item label="中心名称" :label-width="formLabelWidth">
                    <el-input value="软件资源二中心" disabled></el-input>
                </el-form-item>
                <el-form-item label="部门名称" :label-width="formLabelWidth">
                    <el-input v-model="deptForm.name"></el-input>
                </el-form-item>
                <el-form-item label="部门简称" :label-width="formLabelWidth">
                    <el-input v-model="deptForm.abbr"></el-input>
                </el-form-item>
                <el-form-item label="部门负责人" :label-width="formLabelWidth">
                    <el-input v-model="deptForm.manager" placeholder="输入自动查询"></el-input>
                </el-form-item>
                <el-form-item label="部门助理" :label-width="formLabelWidth">
                    <el-input v-model="deptForm.assistant" placeholder="输入自动查询"></el-input>
                </el-form-item>
                <el-form-item label="服务类别" :label-width="formLabelWidth">
                    <el-select v-model="deptForm.servicetype"  multiple filterable allow-create default-first-option  placeholder="请选择" style="width: 100%">
                        <el-option label="人员外包" value="1"></el-option>
                        <el-option label="项目外包" value="2"></el-option>
                        <el-option label="产品外包" value="3"></el-option>
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
import api from '../common/api.js';
export default {
    data() {
        return {
            date: '',
            tableData: [{
                name: '软件资源二中心资源服务一部',
                abbreviation: '资源一部',
                manager: '王怀玲',
                assistant: '谢灵杰',
                servicetype: '人员外包'
            },{
                name: '软件资源二中心资源服务二部',
                abbreviation: '资源二部',
                manager: '孙博',
                assistant: '谢灵杰',
                servicetype: '人员外包'
            },{
                name: '软件资源二中心资源服务三部',
                abbreviation: '资源三部',
                manager: '王海刚',
                assistant: '谢灵杰',
                servicetype: '人员外包'
            },{
                name: '软件资源二中心资源服务四部',
                abbreviation: '资源四部',
                manager: '王怀玲',
                assistant: '谢灵杰',
                servicetype: '人员外包'
            }],
            deptForm: {},
            input5: '',
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
        // this.testApi();
    },
    methods: {
        testApi() {
            console.log(api.department.add)
            this.$axios.post(api.department.add).then((res) => {
                console.log(res.data);
                this.tableData = res.data.list;
            })
        }
    }
}
</script>

<style scoped>

</style>
