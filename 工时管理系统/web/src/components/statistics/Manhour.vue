<template>
<div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-recharge"></i> 统计查询</el-breadcrumb-item>
            <el-breadcrumb-item> 结算统计</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <el-form :inline="true" :model="form" label-width="80px">
            <el-form-item label="客户类别">
                <el-select v-model="form.custtype">
                    <el-option label="中国银行" value="zgyh"></el-option>
                    <el-option label="中国人寿" value="zgrs"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="客户名称">
                <el-select v-model="form.proname">
                    <el-option label="中国银行etc项目" value="1"></el-option>
                    <el-option label="中国银行合肥分中心" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="选择日期">
                <el-date-picker type="month" placeholder="开始日期" v-model="form.startDate" style="width: 140px"></el-date-picker> -
                <el-date-picker type="month" placeholder="结束日期" v-model="form.endDate" style="width: 140px"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
        </el-form>
        <div class="schart-box">
            <schart class="schart" canvasId="bar" :data="data1" type="bar" :options="options1"></schart>
        </div>
        <div class="schart-box">
            <!-- <div class="content-title">折线图</div> -->
            <schart class="schart" canvasId="line" :data="data1" type="line" :options="options2"></schart>
        </div>
    </div>
</div>
</template>

<script>
import Schart from 'vue-schart';
export default {
    data() {
        return {
            form: {
                proname: '',
                startDate: '',
                endDate: ''
            },
            data1: [{
                    name: '2012',
                    value: 1141
                },
                {
                    name: '2013',
                    value: 1499
                },
                {
                    name: '2014',
                    value: 2260
                },
                {
                    name: '2015',
                    value: 1170
                },
                {
                    name: '2016',
                    value: 970
                },
                {
                    name: '2017',
                    value: 1450
                },
                {
                    name: '2018',
                    value: 2800
                }
            ],
            options1: {
                title: '中国银行团队-工时统计(小时)',
                autoWidth: true, // 设置宽高自适应
                showValue: false,
                fillColor: '#409EFF',
                contentColor: 'rgba(46,199,201,0.3)',
                yEqual: 7
            },
            options2: {
                title: '中国银行团队-结算金额统计(万元)',
                bgColor: '#ffffff',
                // titleColor: '#00887C',
                fillColor: 'red',
                contentColor: 'rgba(46,199,201,0.3)'
            },
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

.content-title {
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
</style>
