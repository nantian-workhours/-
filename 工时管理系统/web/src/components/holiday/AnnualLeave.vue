<template>
<div class="table">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-remind"></i> 请假管理</el-breadcrumb-item>
            <el-breadcrumb-item> 年假查询</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="姓名">
                <el-input v-model="formInline.user" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="所属部门">
                <el-select v-model="formInline.department" placeholder="请选择">
                    <el-option label="资源二中心一部" value="01"></el-option>
                    <el-option label="资源二中心二部" value="02"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="年度">
                <el-date-picker v-model="date" type="month" placeholder="请选择年份"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" border class="table">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="dept" label="所属部门"></el-table-column>
            <el-table-column prop="year" label="年份"></el-table-column>
            <el-table-column prop="totalAnnual" label="可用年假"></el-table-column>
            <el-table-column prop="remainingAnnual" label="剩余年假"></el-table-column>
            <el-table-column prop="totalRest" label="可用调休"></el-table-column>
            <el-table-column prop="remainingRest" label="剩余调休"></el-table-column>
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
            date: '',
            tableData: [{
                name: '周怡',
                dept: '软件资源二中心一部',
                year: '2019',
                totalAnnual: '5天',
                remainingAnnual: '5天',
                totalRest: '80小时',
                remainingRest: '80小时'
            }],
            formInline: {
                user: '',
                time: '',
                department: '',
                type: ''
            }
        }
    }
}
</script>

<style scoped>
</style>
