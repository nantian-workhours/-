<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-remind"></i> 工时管理</el-breadcrumb-item>
                <el-breadcrumb-item> 工时导入</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form :inline="true" :model="form" class="demo-form-inline">
                        <el-form-item label="所在项目">
                            <el-select v-model="form.group" placeholder="请选择">
                                <el-option label="中国银行" value="01"></el-option>
                                <el-option label="中国人寿" value="02"></el-option>
                                <el-option label="中国邮政储蓄" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                            <el-button type="primary">开始上传</el-button>
                    </el-form>
                    <el-upload class="upload-demo" drag action="" multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">仅支持excel文件格式</div>
                    </el-upload>
                </el-col>
                <el-col :span="12">
                    <h5 class="mgb10">上传结果</h5>
                    <el-table border>
                        <el-table-column prop="name" label="文件名称"></el-table-column>
                        <el-table-column prop="name" label="总计导入数据"></el-table-column>
                        <el-table-column prop="name" label="成功条数"></el-table-column>
                        <el-table-column prop="name" label="失败条数"></el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        }
    }
}
</script>

<style scoped>

</style>
