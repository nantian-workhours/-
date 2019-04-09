<template>
<div class="table">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-remind"></i> 工时管理</el-breadcrumb-item>
            <el-breadcrumb-item> 异议处理</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <el-form :inline="true" :model="form" label-width="80px">
            <el-form-item label="申请人">
                <el-input placeholder="请输入申请人姓名"></el-input>
            </el-form-item>
            <el-form-item label="申请日期">
                <el-date-picker type="date" placeholder="申请日期" v-model="form.startDate" style="width: 140px"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
                <el-button type="danger" @click="dialogFormVisible = true">异议申请</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="data" border class="table">
            <el-table-column prop="name" label="申请人" width="120"></el-table-column>
            <el-table-column prop="type" label="申请类型" width="100"></el-table-column>
            <el-table-column prop="date" label="异议日期" width="120"></el-table-column>
            <el-table-column prop="content" label="申请理由"></el-table-column>
            <el-table-column prop="date" label="申请日期" width="120"></el-table-column>
            <el-table-column prop="progress" label="处理状态" width="100"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-edit" @click="auditFormVisible = true">审核</el-button>
                    <!-- <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
                </template>
            </el-table-column>
        </el-table>
        
        <el-dialog title="异议申请" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="异议日期" :label-width="formLabelWidth">
                    <el-date-picker v-model="form.date" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="当天工时" :label-width="formLabelWidth">
                    <el-row :gutter="24">
                        <el-col :span="5" align="left">
                            <el-tag type="primary">正常工时：8H</el-tag>
                        </el-col>
                        <el-col :span="5">
                            <el-tag type="success">加班工时：2H</el-tag>
                        </el-col>
                        <el-col :span="5">
                            <el-tag type="danger">请假工时：0H</el-tag>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="申请工时" :label-width="formLabelWidth">
                    <p>正常工时 <el-input-number v-model="form.num1" :min="1" :max="10" size="mini" controls-position="right"></el-input-number> H</p>
                    <p>加班工时 <el-input-number v-model="form.num2" :min="1" :max="10" size="mini" controls-position="right"></el-input-number> H</p>
                    <p>请假工时 <el-input-number v-model="form.num3" :min="1" :max="10" size="mini" controls-position="right"></el-input-number> H</p>
                </el-form-item>
                <el-form-item label="申请理由" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="附件" :label-width="formLabelWidth">
                    <el-upload class="upload-demo" action="" list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        
        <el-dialog title="异议审核" :visible.sync="auditFormVisible">
            <el-form :model="formInline">
                <el-form-item label="异议日期" :label-width="formLabelWidth">
                    <el-input type="input" value="2019-01-23" readonly></el-input>
                </el-form-item>
                <el-form-item label="当天工时" :label-width="formLabelWidth">
                    <el-row :gutter="24">
                        <el-col :span="5" align="left">
                            <el-tag type="primary">正常工时：8H</el-tag>
                        </el-col>
                        <el-col :span="5">
                            <el-tag type="success">加班工时：0H</el-tag>
                        </el-col>
                        <el-col :span="5">
                            <el-tag type="danger">请假工时：0H</el-tag>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="申请工时" :label-width="formLabelWidth">
                    <el-row :gutter="24">
                        <el-col :span="5" align="left">
                            <el-tag type="primary">正常工时：8H</el-tag>
                        </el-col>
                        <el-col :span="5">
                            <el-tag type="success">加班工时：3H</el-tag>
                        </el-col>
                        <el-col :span="5">
                            <el-tag type="danger">请假工时：0H</el-tag>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="申请理由" :label-width="formLabelWidth">
                    <el-input type="textarea" value="当天加班工时应为3小时，忘批准" readonly></el-input>
                </el-form-item>
                <el-form-item label="附件" :label-width="formLabelWidth">
                    <img src="../../assets/img/img.jpg" alt="">
                </el-form-item>
                <el-form-item label="审核处理" :label-width="formLabelWidth">
                    <el-select v-model="formInline.auditType" placeholder="请选择">
                        <el-option label="通过" value="zhonghang"></el-option>
                        <el-option label="不通过" value="renshou"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="不通过原因" :label-width="formLabelWidth">
                    <el-input type="textarea"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="auditFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="auditFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</div>
</template>

<script>
import api from '../common/api'
export default {
    data() {
        return {
            data: [],
            dialogFormVisible: false,
            form: {
                region: '',
                date: '',
                desc: ''
            },
            formInline: {
                auditType: ''
            },
            formLabelWidth: '120px',
            auditFormVisible: false,
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            this.$axios.post(api.manhour.objection).then((res) => {
                this.data = res.data.list;
            })
        }
    }
}
</script>

<style scoped>
.btns {
    margin-bottom: 10px;
}
</style>
