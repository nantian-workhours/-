<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-settings"></i> 系统管理</el-breadcrumb-item>
                <el-breadcrumb-item> 密码管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form :inline="true" :model="formSearch" class="demo-form-inline">
                <el-form-item label="用户名">
                    <el-input v-model="formSearch.username" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="身份证号码">
                    <el-input v-model="formSearch.idno" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="roleData" border class="table mgb10">
                <el-table-column prop="username" label="姓名"></el-table-column>
                <el-table-column prop="idno" label="身份证号"></el-table-column>
                <el-table-column prop="dept" label="部门名称"></el-table-column>
                <el-table-column prop="email" label="个人邮箱"></el-table-column>
                <el-table-column label="操作" width="220" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-refresh" class="red">重置密码</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import api from '../common/api.js'
export default {
    name: 'basetable',
    data() {
        return {
            formSearch: {},
            date: '',
            roleData: [{
                'username': '周吴',
                'idno': '130636199910101222',
                'dept': '软件资源二中心一部',
                'email': 'zhouwu@qq.com'
            }, {
                'username': '赵茜',
                'idno': '110123412341243123',
                'dept': '软件资源二中心二部',
                'email': 'zhaoqian@qq.com'
            }],
            formInline: {
                name: '',
                password: 'nt000000',
                level: ''
            },
            userNameEditable: true,
            dialogFormVisible: false,
            formLabelWidth: '120px'
        }
    },
    methods: {
        handleEdit(index, row) {
            this.dialogFormVisible = true;
            this.userNameEditable = true;
            this.formInline.name = row.userName;
            this.formInline.password = row.password;
            this.formInline.level = row.roleLevel;
        }
    }
}
</script>

<style scoped>
.red {
    color: #ff0000;
}
</style>
