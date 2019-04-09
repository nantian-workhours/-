<template>
<div class="table">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-settings"></i> 系统管理</el-breadcrumb-item>
            <el-breadcrumb-item> 角色管理</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <el-button type="danger" @click="addRole">添加角色</el-button>
        <el-table :data="roleData" border class="table" style="margin-top: 10px;">
            <el-table-column prop="roleName" label="角色名称"></el-table-column>
            <el-table-column prop="roleLevel" label="级别"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- dialog -->
        <el-dialog title="添加角色" :visible.sync="dialogFormVisible">
            <el-form :model="formInline" :label-width="formLabelWidth">
                <el-form-item label="角色名称">
                    <el-input v-model="formInline.name"></el-input>
                </el-form-item>
                <el-form-item label="角色级别">
                    <el-input v-model="formInline.level"></el-input>
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
            roleData: [{
                'roleName': '超级管理员',
                'roleLevel': '01'
            },{
                'roleName': '系统管理员',
                'roleLevel': '02'
            },{
                'roleName': '普通用户',
                'roleLevel': '03'
            }],
            formInline: {
                name: '',
                level: ''
            },
            dialogFormVisible: false,
            formLabelWidth: '120px'
        }
    },
    methods: {
        handleEdit(index, row) {
            this.dialogFormVisible = true;
            this.formInline.name = row.roleName;
            this.formInline.level = row.roleLevel;
        },
        addRole() {
            this.dialogFormVisible = true;
            this.formInline.name = '';
            this.formInline.level = '';
        }
    }
}
</script>

<style scoped>
    .red {
        color: #ff0000;
    }
</style>
