<template>
<div class="table">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-remind"></i> 请假管理</el-breadcrumb-item>
            <el-breadcrumb-item> 请假查询</el-breadcrumb-item>
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
            <el-form-item>
                <el-button type="danger" @click="dialogFormVisible = true">请假申请</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" border class="table">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="dept" label="所属部门"></el-table-column>
            <el-table-column prop="date1" label="开始日期" sortable></el-table-column>
            <el-table-column prop="date2" label="结束日期"></el-table-column>
            <el-table-column prop="days" label="请假天数"></el-table-column>
            <el-table-column prop="type" label="请假类型" width="80"></el-table-column>
            <el-table-column prop="explain" label="请假内容"></el-table-column>
            <el-table-column prop="auditStatus" label="审核状态"></el-table-column>
            <el-table-column label="审核">
                <template slot-scope="scope">
                    <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
                    <el-button type="text" size="small" class="el-icon-lx-roundcheck"> 通过</el-button>
                    <el-button type="text" size="small" class="red el-icon-lx-exit">退回</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- dialog -->
        <el-dialog title="请假申请" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="所属部门" :label-width="formLabelWidth">
                    <el-select v-model="form.department" placeholder="请选择">
                        <el-option label="资源二中心一部" value="01"></el-option>
                        <el-option label="资源二中心二部" value="02"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input type="text" placeholder="请输入" class="input-control"></el-input>
                </el-form-item>
                <el-form-item label="请假时间" :label-width="formLabelWidth">
                    <el-col :span="6">
                        <el-date-picker type="date" placeholder="开始日期" v-model="form.startDate" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="inline" :span="1" style="text-align:center"> -</el-col>
                    <el-col :span="6">
                        <el-date-picker type="date" placeholder="结束日期" v-model="form.endDate" style="width: 100%;"></el-date-picker> 
                    </el-col>
                    <el-col :span="6" :offset="1">
                        <el-input type="text" placeholder="天数" v-model="form.dayInput">
                            <template slot="append">天</template>
                        </el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="请假类型" :label-width="formLabelWidth">
                    <el-select v-model="form.type" placeholder="请选择">
                        <el-option label="调休" value="01"></el-option>
                        <el-option label="病假" value="02"></el-option>
                        <el-option label="事假" value="03"></el-option>
                        <el-option label="年假" value="04"></el-option>
                        <el-option label="婚假" value="05"></el-option>
                        <el-option label="产假" value="06"></el-option>
                        <el-option label="丧假" value="07"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="请假内容" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="form.desc"></el-input>
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
            this.$axios.post(api.holiday.query).then((res) => {
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
.table {
    width: 100%;
    font-size: 14px;
}

.red {
    color: #ff0000;
}

.bg-00 {
    background-color: #409EFF;
    color: #fff;
}

.bg-01 {
    background-color: #67C23A;
    color: #fff;
}

.bg-02 {
    background-color: #E6A23C;
    color: #fff;
}
</style>
