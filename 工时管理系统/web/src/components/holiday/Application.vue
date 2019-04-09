<template>
<div class="table">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-remind"></i> 请假管理</el-breadcrumb-item>
            <el-breadcrumb-item> 请假申请</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <div class="form-box">
            <el-form :model="form" label-width="80px">
                
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
                        <el-option label="婚假" value="04"></el-option>
                        <el-option label="产假" value="05"></el-option>
                        <el-option label="丧假" value="06"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="请假内容" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">提交申请</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            formLabelWidth: '120px',
            form: {
                department: '',
                startDate: '',
                endDate: '',
                region: '',
                desc: ''
            }
        }
    },
    components: {

    }
}
</script>

<style scoped>

</style>
