<template>
<div class="table">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-remind"></i> 员工管理</el-breadcrumb-item>
            <el-breadcrumb-item> 所在项目</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <el-form :inline="true">
            <el-form-item label="客户类别">
                <el-select v-model="queryForm.custtype" placeholder="请选择">
                    <el-option label="中国银行" value="zgyh"></el-option>
                    <el-option label="中国人寿" value="zgrs"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="项目名称">
                <el-select v-model="queryForm.proname" placeholder="请选择">
                    <el-option label="银联移动支付项目" value="zgyh"></el-option>
                    <el-option label="公司金融贷后管理项目" value="zgrs"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="员工姓名">
                <el-input v-model="queryForm.name" placeholder="员工姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
                <el-button type="danger" @click="dialogFormVisible = true">关联员工</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="proData" border class="table" height="260">
            <el-table-column prop="name" label="员工姓名"></el-table-column>
            <el-table-column prop="idno" label="身份证号"></el-table-column>
            <el-table-column prop="dept" label="部门"></el-table-column>
            <el-table-column prop="relatepro" label="客户类别"></el-table-column>
            <el-table-column prop="proname" label="项目名称"></el-table-column>
            <el-table-column prop="worktype" label="工作类别"></el-table-column>
            <el-table-column prop="level" label="技术等级"></el-table-column>
            <el-table-column prop="starttime" label="开始日期"></el-table-column>
            <el-table-column prop="endtime" label="结束日期"></el-table-column>
            <el-table-column prop="status" label="在场状态"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-edit">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <!-- dialog -->
    <el-dialog title="添加员工" :visible.sync="dialogFormVisible">
        <el-form :model="projectForm" :label-width="formLabelWidth" style="width: 600px;">
            <el-form-item label="员工姓名">
                <el-input v-model="projectForm.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="projectForm.idno"></el-input>
            </el-form-item>
            <el-form-item label="客户类别">
                <el-select v-model="projectForm.custtype" placeholder="请选择">
                    <el-option label="中国银行" value="zgyh"></el-option>
                    <el-option label="中国人寿" value="zgrs"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="项目名称">
                <el-select v-model="projectForm.proname" placeholder="请选择">
                    <el-option label="银联移动支付项目" value="zgyh"></el-option>
                    <el-option label="公司金融贷后管理项目" value="zgrs"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="工作类别">
                <el-select v-model="projectForm.worktype" placeholder="请选择">
                    <el-option label="Java开发" value="01"></el-option>
                    <el-option label="前端开发" value="02"></el-option>
                    <el-option label="软件测试" value="03"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="技术等级">
                <el-select v-model="projectForm.level" placeholder="请选择">
                    <el-option label="初级" value="zgyh"></el-option>
                    <el-option label="中级" value="zgrs"></el-option>
                    <el-option label="高级" value="zgrs"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="起始日期">
                <el-date-picker type="date" placeholder="开始日期" v-model="projectForm.startDate"></el-date-picker> -
                <el-date-picker type="date" placeholder="结束日期" v-model="projectForm.endDate"></el-date-picker>
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
export default {
    data() {
        return {
            queryForm: {},
            form: {},
            projectForm: {},
            formLabelWidth: '120px',
            dialogFormVisible: false,
            proData: [{
                name: '周康',
                idno: '130634198810111666',
                dept: '资源服务二中心',
                relatepro: '中国银行',
                proname: '公司金融贷后管理项目',
                worktype: '前端开发',
                level: '三级',
                starttime: '2017-10-01',
                endtime: '2018-12-30',
                status: '离场',
            },{
                name: '丽丽',
                idno: '130634198810111666',
                dept: '资源服务二中心',
                relatepro: '中国银行',
                proname: '公司金融贷后管理项目',
                worktype: 'JAVA开发',
                level: '三级',
                starttime: '2017-10-01',
                endtime: '至今',
                status: '在场',
            }],
            inputDisable: false
        }
    },
    methods: {
        addAlias() {
            this.dialogFormVisible = true;
            this.inputDisable = false;
            this.projectForm = {};
        },
        editAlias(data) {
            this.inputDisable = true;
            let {
                name,
                idno,
                alias,
                group
            } = data;
            this.projectForm.name = name;
            this.projectForm.idno = idno;
            this.projectForm.alias = alias;
            this.projectForm.group = group;
            this.dialogFormVisible = true;
        },
        delAlias(data) {
            this.$confirm('确定要删除吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // todo
            }).catch(() => {
                // todo
            });
        }
    }
}
</script>

<style scoped>

</style>
