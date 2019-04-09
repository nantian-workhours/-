<template>
<div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-recharge"></i> 统计查询</el-breadcrumb-item>
            <el-breadcrumb-item> 请假统计</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <el-tabs v-model="activeName">
            <el-tab-pane label="按客户查" name="first">
                <el-form :inline="true" :model="form1" label-width="80px">
                    <el-form-item label="客户类别">
                        <el-select v-model="form1.custtype">
                            <el-option label="中国银行" value="1"></el-option>
                            <el-option label="中国人寿" value="2"></el-option>
                            <el-option label="公司内部系统" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="项目名称">
                        <el-select v-model="form1.proname">
                            <el-option label="中国银行etc项目" value="1"></el-option>
                            <el-option label="中国银行合肥分中心" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="选择日期">
                        <el-date-picker type="month" placeholder="开始日期" v-model="form1.startDate" style="width: 140px"></el-date-picker> -
                        <el-date-picker type="month" placeholder="结束日期" v-model="form1.endDate" style="width: 140px"></el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="按部门查" name="second">
                <el-form :inline="true" :model="form2" label-width="80px">
                    <el-form-item label="部门名称">
                        <el-select v-model="form2.dept">
                            <el-option label="软件资源二中心一部" value="1"></el-option>
                            <el-option label="软件资源二中心二部" value="2"></el-option>
                            <el-option label="软件资源二中心三部" value="2"></el-option>
                            <el-option label="软件资源二中心四部" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="选择日期">
                        <el-date-picker type="month" placeholder="开始日期" v-model="form2.startDate" style="width: 140px"></el-date-picker> -
                        <el-date-picker type="month" placeholder="结束日期" v-model="form2.endDate" style="width: 140px"></el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="按员工查" name="third">
                <el-form :inline="true" :model="form3" label-width="80px">
                    <el-form-item label="姓名">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="选择日期">
                        <el-date-picker type="month" placeholder="开始日期" v-model="form3.startDate" style="width: 140px"></el-date-picker> -
                        <el-date-picker type="month" placeholder="结束日期" v-model="form3.endDate" style="width: 140px"></el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
        <div class="schart-box">
            <div class="content-title">时间: 2019-01至2019-03</div>
            <schart class="schart" canvasId="pie" :data="data" type="pie" :options="options"></schart>
        </div>
        <div class="schart-box">
            <div class="content-title">时间: 2019-01至2019-03</div>
            <schart class="schart" canvasId="pie2" :data="data2" type="pie" :options="options2"></schart>
        </div>
    </div>
</div>
</template>

<script>
import Schart from 'vue-schart';
export default {
    data() {
        return {
            activeName: 'first',
            form1: {},
            form2: {},
            form3: {},
            data: [{
                    name: '调休',
                    value: 10
                },
                {
                    name: '病假',
                    value: 2
                },
                {
                    name: '事假',
                    value: 8
                },
                {
                    name: '年假',
                    value: 1
                }
            ],
            options: {
                title: '中国银行团队-请假统计(人)',
                legendColor: '#444',
                radius: 120,
                innerRadius: 80
            },
            data2: [{
                    name: '调休',
                    value: 100
                },
                {
                    name: '病假',
                    value: 20
                },
                {
                    name: '事假',
                    value: 30
                },
                {
                    name: '年假',
                    value: 10
                }
            ],
            options2: {
                title: '中国银行团队-请假统计(小时)',
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
