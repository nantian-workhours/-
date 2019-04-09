<template>
<div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-friend"></i> 员工管理</el-breadcrumb-item>
            <el-breadcrumb-item> 信息管理</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <el-form :inline="true" :model="form" label-width="80px">
            <el-form-item label="部门">
                <el-select v-model="form.group">
                    <el-option label="资源一部" value="01"></el-option>
                    <el-option label="资源二部" value="02"></el-option>
                    <el-option label="资源三部" value="03"></el-option>
                    <el-option label="资源四部" value="04"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="员工姓名">
                <el-input type="input"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
                <el-button type="danger" @click="showDetial">新增员工</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="data" border class="table" height="260">
            <el-table-column prop="name" label="员工姓名"></el-table-column>
            <el-table-column prop="alias" label="别名" :formatter="nameFmt"></el-table-column>
            <el-table-column prop="idno" label="身份证号"></el-table-column>
            <el-table-column prop="dept" label="部门"></el-table-column>
            <el-table-column prop="group" label="关联客户"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-search" @click="showDetial">详情</el-button>
                    <el-button type="text" icon="el-icon-edit" @click="showDetial">编辑</el-button>
                    <el-button type="text" icon="el-icon-delete" class="red">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
import api from '../common/api'
export default {
    data() {
        return {
            data: [],
            form: {},
            dialogFormVisible: false
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            this.$axios.post(api.employee.query).then(res => {
                this.data = res.data.list;
            });
        },
        nameFmt(row) {
            return row.name + '001';
        },
        showDetial() {
            this.$router.push('/employee/detail')
        }
    }
}
</script>

<style scoped>
.red {
    color: #ff0000;
}
</style>
