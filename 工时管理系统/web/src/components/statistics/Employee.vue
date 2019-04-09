<template>
<div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-recharge"></i> 统计查询</el-breadcrumb-item>
            <el-breadcrumb-item> 员工统计</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <el-form :inline="true" :model="form" label-width="80px">
            <el-form-item label="部门名称">
                <el-select v-model="form.dept">
                    <el-option label="软件资源二中心一部" value="01"></el-option>
                    <el-option label="软件资源二中心二部" value="02"></el-option>
                    <el-option label="软件资源二中心三部" value="03"></el-option>
                    <el-option label="软件资源二中心四部" value="04"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="客户类型">
                <el-select v-model="form.custtype">
                    <el-option label="中国银行" value="1"></el-option>
                    <el-option label="中国人寿" value="2"></el-option>
                    <el-option label="公司内部系统" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="客户名称">
                <el-select v-model="form.custname">
                    <el-option label="中国银行etc项目" value="1"></el-option>
                    <el-option label="中国银行合肥分中心" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="employeeData" border class="table">
            <el-table-column prop="dept" label="部门"></el-table-column>
            <el-table-column prop="job" label="岗位"></el-table-column>
            <el-table-column prop="custtype" label="客户类别"></el-table-column>
            <el-table-column prop="worktype" label="工作类别"></el-table-column>
            <el-table-column prop="level" label="技术等级"></el-table-column>
            <el-table-column prop="totalNum" label="员工人数"></el-table-column>
        </el-table>
        <div class="schart-box">
            <schart class="schart" canvasId="ring" :data="data" type="ring" :options="options"></schart>
        </div>
    </div>
</div>
</template>

<script>
import Schart from 'vue-schart';
export default {
    data() {
        return {
            form: {},
            employeeData: [{
                dept: '软件资源二中心一部',
                job: '软件开发',
                custtype: '中国银行',
                worktype: '软件开发',
                level: '高级',
                totalNum: 200
            }],
            data : [
                {name:'JAVA开发',value:100},
                {name:'前端开发',value:20},
                {name:'软件测试',value:30},
                {name:'需求分析',value:10}
            ],
            options: {
                title: '中国银行团队人数统计(人)',
                // bgColor: '#829daa',
                // titleColor: '#ffffff',
                legendColor: '#444',
                radius: 120,
                innerRadius: 80
            }
        }
    },
    components: {
        Schart
    }
}
</script>

<style scoped>
.schart-box {
    display: inline-block;
    margin: 20px;
}

.schart {
    width: 500px;
    height: 400px;
}

</style>
