<template>
<div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-recharge"></i> 结算管理</el-breadcrumb-item>
            <el-breadcrumb-item> 单价管理</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <el-form :inline="true" :model="form" label-width="80px">
            <el-form-item label="客户类别">
                <el-select v-model="form.proname">
                    <el-option label="中国银行" value="zgyh"></el-option>
                    <el-option label="中国人寿" value="zgrs"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="工作类别">
                <el-select v-model="form.worktype">
                    <el-option label="软件开发" value="zgyh"></el-option>
                    <el-option label="软件测试" value="zgrs"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="选择日期">
                <el-date-picker type="date" placeholder="开始日期" v-model="form.startDate" style="width: 140px"></el-date-picker> -
                <el-date-picker type="date" placeholder="结束日期" v-model="form.endDate" style="width: 140px"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
                <el-button type="danger" @click="dialogFormVisible = true">新增单价</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="data" border class="table" height="260">
            <el-table-column prop="customerCategory" label="客户类别"></el-table-column>
            <!-- <el-table-column prop="proName" label="项目名称" :formatter="proNameFmt"></el-table-column> -->
            <el-table-column prop="workCategory" label="工作类别"></el-table-column>
            <el-table-column prop="level" label="技术等级"></el-table-column>
            <el-table-column prop="levelUnitPrice" label="等级单价"></el-table-column>
            <el-table-column prop="startDate" label="开始日期"></el-table-column>
            <el-table-column prop="endDate" label="结束日期"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-dialog title="新增单价" :visible.sync="dialogFormVisible">
        <el-form :model="form" style="width: 500px">
            <el-form-item label="客户类别" :label-width="formLabelWidth">
                <el-select v-model="form.custtype" placeholder="请选择">
                    <el-option label="中国银行" value="01"></el-option>
                    <el-option label="中国人寿" value="02"></el-option>
                    <el-option label="农业银行" value="03"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="项目名称" :label-width="formLabelWidth">
                <el-select v-model="form.proname2" placeholder="请选择">
                    <el-option label="全部" value="00"></el-option>
                    <el-option label="中国银行-银联移动支付项目" value="01"></el-option>
                    <el-option label="中国银行-信用卡客户体验提升项目" value="02"></el-option>
                    <el-option label="中国银行-公司金融贷后管理项目" value="03"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="工作类别" :label-width="formLabelWidth">
                <el-select v-model="form.worktype" multiple filterable allow-create default-first-option placeholder="请选择">
                    <el-option label="开发" value="01"></el-option>
                    <el-option label="测试" value="02"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="技术等级" :label-width="formLabelWidth">
                <el-select v-model="form.level" placeholder="请选择">
                    <el-option label="初级" value="01"></el-option>
                    <el-option label="中级" value="02"></el-option>
                    <el-option label="高级" value="03"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="等级单价" :label-width="formLabelWidth">
                <el-input type="input" v-model="addForm.levelPrice" style="width: 210px;"></el-input> 元
            </el-form-item>
            <el-form-item label="起始日期" :label-width="formLabelWidth">
                <el-date-picker type="date" placeholder="开始日期" v-model="addForm.startDate" style="width: 160px"></el-date-picker> -
                <el-date-picker type="date" placeholder="结束日期" v-model="addForm.endDate" style="width: 160px"></el-date-picker>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
import api from '../common/api'
export default {
    data() {
        return {
            form: {
                proname: '',
                startDate: '',
                endDate: ''
            },
            dialogFormVisible: false,
            formLabelWidth: '120px',
            addForm: {
                startDate: '',
                endDate: ''
            },
            data: []
        }
    },
    mounted() {
        this.getDate();
    },
    methods: {
        getDate() {
            this.$axios.post(api.settlement.query).then((res) => {
                this.data = res.data.list;
            });
        },
        proNameFmt(row, column) {
            return row.customerCategory + '资源一部';
        }
    }
}
</script>

<style scoped>
    .red{
        color: #ff0000;
    }
</style>
