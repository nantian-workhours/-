<template>
<div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-friend"></i> 员工管理</el-breadcrumb-item>
            <el-breadcrumb-item> 查看详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <h5 class="mgb10">基本信息</h5>
        <el-form :inline="true" :model="baseInfo" label-width="80px">
            <el-form-item label="姓名">
                <el-input placeholder="周吴" v-model="baseInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input placeholder="110987199001026666" v-model="baseInfo.idno"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="baseInfo.sex" style="width: 200px">
                    <el-option label="男" value="1"></el-option>
                    <el-option label="女" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="生日">
                <el-input placeholder="1990-01-02" v-model="baseInfo.alias"></el-input>
            </el-form-item>
            <el-form-item label="民族">
                <el-input placeholder="汉族" v-model="baseInfo.alias"></el-input>
            </el-form-item>
            <el-form-item label="籍贯">
                <el-input placeholder="北京市海淀区上地" v-model="baseInfo.alias"></el-input>
            </el-form-item>
            <el-form-item label="婚姻状况">
                <el-select v-model="baseInfo.maritalStatus" style="width: 200px">
                    <el-option label="已婚" value="1"></el-option>
                    <el-option label="未婚" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="公司邮箱">
                <el-input placeholder="zhouwu@nantian.com.cn" v-model="baseInfo.email01"></el-input>
            </el-form-item>
            <el-form-item label="个人邮箱">
                <el-input placeholder="zhouwu@126.com" v-model="baseInfo.email02"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
                <el-input placeholder="18600007666" v-model="baseInfo.alias"></el-input>
            </el-form-item>
            <el-form-item label="学历">
                <el-select v-model="baseInfo.educationbg" style="width: 200px">
                    <el-option label="博士" value="1"></el-option>
                    <el-option label="硕士" value="2"></el-option>
                    <el-option label="本科" value="3"></el-option>
                    <el-option label="大专" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="毕业院校">
                <el-input placeholder="北京大学" v-model="baseInfo.alias"></el-input>
            </el-form-item>
            <el-form-item label="专业">
                <el-input placeholder="计算机科学与技术" v-model="baseInfo.alias"></el-input>
            </el-form-item>
            <el-form-item label="毕业日期">
                <el-date-picker v-model="baseInfo.date1" type="date" placeholder="选择日期" class="width-control"></el-date-picker>
            </el-form-item>
            <el-form-item label="职位">
                <el-select v-model="deptInfo.position" style="width: 200px">
                    <el-option label="员工" value="1"></el-option>
                    <el-option label="部门经理" value="2"></el-option>
                    <el-option label="总经理" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="岗位">
                <el-select v-model="deptInfo.job" style="width: 200px">
                    <el-option label="java开发" value="1"></el-option>
                    <el-option label="前端开发" value="2"></el-option>
                    <el-option label="软件测试" value="3"></el-option>
                    <el-option label="需求分析" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="在职状态">
                <el-select v-model="deptInfo.status" style="width: 200px">
                    <el-option label="在职" value="1"></el-option>
                    <el-option label="离职" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="入司日期">
                <el-date-picker v-model="baseInfo.date2" type="date" placeholder="选择日期" class="width-control"></el-date-picker>
            </el-form-item>
            <el-form-item label="离司日期">
                <el-date-picker v-model="baseInfo.date3" type="date" placeholder="选择日期" class="width-control"></el-date-picker>
            </el-form-item>
            <el-form-item label="所属部门">
                <el-select v-model="deptInfo.name" style="width: 200px">
                    <el-option label="资源二中心一部" value="1"></el-option>
                    <el-option label="资源二中心二部" value="2"></el-option>
                    <el-option label="资源二中心三部" value="3"></el-option>
                    <el-option label="资源二中心四部" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="系统权限">
                <el-select v-model="deptInfo.permission" style="width: 200px">
                    <el-option label="普通用户" value="1"></el-option>
                    <el-option label="管理员" value="2"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-button type="primary">保存</el-button>
        <el-button type="success">编辑</el-button>
        <el-button type="danger" @click="cancel">取消</el-button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            baseInfo: {
                sex: '1',
                maritalStatus: '2'
            },
            deptInfo: {},
            projectInfo: {}
        }
    },
    methods: {
        cancel() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .width-control{
        width: 200px;
    }
</style>
