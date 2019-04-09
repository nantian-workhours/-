<template>
<div class="table">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-remind"></i> 员工管理</el-breadcrumb-item>
            <el-breadcrumb-item> 别名管理</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <el-form :inline="true">
            <el-form-item label="员工姓名">
                <el-input type="input" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input type="input" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="客户类型">
                <el-select v-model="form.group">
                    <el-option label="中国银行" value="zgyh"></el-option>
                    <el-option label="中国人寿" value="zgrs"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
                <el-button type="danger" @click="addAlias">新增别名</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="aliasData" border class="table" height="260">
            <el-table-column prop="name" label="员工姓名"></el-table-column>
            <el-table-column prop="idno" label="身份证号"></el-table-column>
            <el-table-column prop="alias" label="别名"></el-table-column>
            <el-table-column prop="group" label="项目名称"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-edit" @click="editAlias(scope.row)">编辑</el-button>
                    <el-button type="text" icon="el-icon-delete" class="red" @click="delAlias(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <!-- dialog -->
    <el-dialog title="添加别名" :visible.sync="dialogFormVisible">
        <el-form :model="aliasAddForm" :label-width="formLabelWidth" style="width: 600px;">
            <el-form-item label="项目名称">
                <el-select v-model="aliasAddForm.group" placeholder="请选择">
                    <el-option label="中国银行" value="zgyh"></el-option>
                    <el-option label="中国人寿" value="zgrs"></el-option>
                    <el-option label="请假系统" value="qjxt"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="员工姓名">
                <el-input v-model="aliasAddForm.name" :disabled="inputDisable"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="aliasAddForm.idno" :disabled="inputDisable"></el-input>
            </el-form-item>
            <el-form-item label="别名">
                <el-input v-model="aliasAddForm.alias"></el-input>
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
            form: {},
            aliasAddForm: {},
            formLabelWidth: '120px',
            dialogFormVisible: false,
            aliasData: [{
                name: '王帅',
                idno: '130634198810111666',
                alias: '王帅001',
                group: '中国人寿'
            }, {
                name: '王帅',
                idno: '130634198810111666',
                alias: '王帅BOC3',
                group: '请假系统'
            }],
            inputDisable: false
        }
    },
    methods: {
        addAlias() {
            this.dialogFormVisible = true;
            this.inputDisable = false;
            this.aliasAddForm = {};
        },
        editAlias(data) {
            this.inputDisable = true;
            let {
                name,
                idno,
                alias,
                group
            } = data;
            this.aliasAddForm.name = name;
            this.aliasAddForm.idno = idno;
            this.aliasAddForm.alias = alias;
            this.aliasAddForm.group = group;
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
