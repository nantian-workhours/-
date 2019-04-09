<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-settings"></i> 系统管理</el-breadcrumb-item>
                <el-breadcrumb-item> 假期管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form :inline="true" :model="formSearch" class="demo-form-inline">
                <el-form-item label="年份">
                    <el-date-picker v-model="formSearch.date" type="year" placeholder="选择年份"></el-date-picker>
                </el-form-item>
                <el-form-item label="假期">
                    <el-input type="input" placeholder="请输入假期名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                    <el-button type="success" @click="add">添加</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="holidayData" border class="table mgb10">
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="type" label="类型"></el-table-column>
                <el-table-column prop="startDate" label="开始日期" sortable></el-table-column>
                <el-table-column prop="endDate" label="结束日期" sortable></el-table-column>
                <el-table-column label="操作" width="220" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- dialog -->
            <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
                <el-form :model="formInline" :label-width="formLabelWidth">
                    <el-form-item label="名称">
                        <el-input v-model="formInline.name" style="width: 220px" placeholder="请输入名称"></el-input>
                    </el-form-item>
                    <el-form-item label="类型">
                        <el-select v-model="formInline.type" placeholder="请选择">
                            <el-option label="假期" value="01"></el-option>
                            <el-option label="工作日" value="02"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="时间段">
                        <el-date-picker type="date" placeholder="开始日期" v-model="formInline.startDate"></el-date-picker> -
                        <el-date-picker type="date" placeholder="结束日期" v-model="formInline.endDate"></el-date-picker>
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
            formSearch: {},
            date: '',
            holidayData: [{
                'name': '春节调整',
                'type': '工作日',
                'startDate': '2019-02-02',
                'endDate': '2019-02-03'
            },{
                'name': '五一劳动节',
                'type': '假期',
                'startDate': '2019-05-01',
                'endDate': '2019-05-01'
            }],
            formInline: {
                name: '',
                year: '',
                date: ''
            },
            dialogFormVisible: false,
            formLabelWidth: '120px',
            dialogTitle: '添加假期'
        }
    },
    methods: {
        handleEdit(index, row) {
            this.dialogFormVisible = true;
            this.formInline.name = row.name;
            this.formInline.year = row.year;
            this.formInline.date = row.date;
        },
        add() {
            this.dialogFormVisible = true;
            this.formInline.name = '';
            this.formInline.year = '';
            this.formInline.date = '';
        }
    }
}
</script>

<style scoped>
.red {
    color: #ff0000;
}
</style>
