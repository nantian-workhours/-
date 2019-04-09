<template>
<div class="table">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-remind"></i> 工时管理</el-breadcrumb-item>
            <el-breadcrumb-item> 工时查询</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <el-form :inline="true" :model="formInline" label-width="80px">
            <el-form-item label="员工姓名">
                <el-input v-model="formInline.user" placeholder="员工姓名"></el-input>
            </el-form-item>
            <el-form-item label="客户名称">
                <el-select v-model="formInline.region" placeholder="请选择">
                    <el-option label="中国银行" value="zhonghang"></el-option>
                    <el-option label="中国人寿" value="renshou"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="选择日期">
                <el-date-picker type="month" placeholder="开始日期" v-model="form.startDate" style="width: 120px"></el-date-picker> -
                <el-date-picker type="month" placeholder="结束日期" v-model="form.endDate" style="width: 120px"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <el-row :gutter="24" class="mgb5">
            <el-col :span="4" class="font-bold">月份：2019-01</el-col>
            <el-col :span="4" class="font-bold">当月正常工作日：22D</el-col>
            <el-col :span="4" class="font-bold">当月正常工时：176H</el-col>
            <el-col :span="4" class="font-bold">当月出勤工时：176H</el-col>
            <el-col :span="4" class="font-bold">当月加班工时：176H</el-col>
            <el-col :span="4" algin="right">
                <el-button type="danger" size="mini">导出</el-button>
                <el-button type="primary" size="mini" @click="dialogFormVisible = true">异议申请</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-table :data="data" border class="table" height="220">
                <el-table-column prop="name" label="姓名" width="80"></el-table-column>
                <el-table-column prop="proDpmt" label="部门" min-width="120"></el-table-column>
                <el-table-column prop="proName" label="项目" min-width="120"></el-table-column>
                <el-table-column prop="normalHour" label="1日"></el-table-column>
                <el-table-column prop="normalHour" label="2日"></el-table-column>
                <el-table-column prop="normalHour" label="3日"></el-table-column>
                <el-table-column prop="normalHour" label="4日"></el-table-column>
                <el-table-column prop="normalHour" label="5日"></el-table-column>
                <el-table-column prop="normalHour" label="6日"></el-table-column>
                <el-table-column prop="normalHour" label="7日"></el-table-column>
                <el-table-column prop="normalHour" label="8日"></el-table-column>
                <el-table-column prop="normalHour" label="9日"></el-table-column>
                <el-table-column prop="normalHour" label="10日"></el-table-column>
                <el-table-column prop="normalHour" label="11日"></el-table-column>
                <el-table-column prop="normalHour" label="12日"></el-table-column>
                <el-table-column prop="normalHour" label="13日"></el-table-column>
                <el-table-column prop="normalHour" label="14日"></el-table-column>
                <el-table-column prop="normalHour" label="15日"></el-table-column>
                <el-table-column prop="normalHour" label="16日"></el-table-column>
                <el-table-column prop="normalHour" label="17日"></el-table-column>
                <el-table-column prop="normalHour" label="18日"></el-table-column>
                <el-table-column prop="normalHour" label="19日"></el-table-column>
                <el-table-column prop="normalHour" label="20日"></el-table-column>
                <el-table-column prop="normalHour" label="21日"></el-table-column>
                <el-table-column prop="normalHour" label="22日"></el-table-column>
                <el-table-column prop="normalHour" label="23日"></el-table-column>
                <el-table-column prop="normalHour" label="24日"></el-table-column>
                <el-table-column prop="normalHour" label="25日"></el-table-column>
                <el-table-column prop="normalHour" label="26日"></el-table-column>
                <el-table-column prop="normalHour" label="27日"></el-table-column>
                <el-table-column prop="normalHour" label="28日"></el-table-column>
                <el-table-column prop="normalHour" label="29日"></el-table-column>
                <el-table-column prop="normalHour" label="30日"></el-table-column>
                <el-table-column prop="normalHour" label="31日"></el-table-column>
                <el-table-column prop="normalHours" width="100" label="正常工时"></el-table-column>
                <el-table-column prop="addedHours" width="100" label="加班工时"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-dialog title="异议申请" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="异议日期" :label-width="formLabelWidth">
                    <el-date-picker v-model="objectionForm.date" type="date" placeholder="选择日期">
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
                    <p>正常工时 <el-input-number v-model="num1" :min="1" :max="10" size="mini" controls-position="right"></el-input-number> H</p>
                    <p>加班工时 <el-input-number v-model="num2" :min="1" :max="10" size="mini" controls-position="right"></el-input-number> H</p>
                    <p>请假工时 <el-input-number v-model="num3" :min="1" :max="10" size="mini" controls-position="right"></el-input-number> H</p>
                </el-form-item>
                <el-form-item label="申请理由" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="objectionForm.desc"></el-input>
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
    </div>
</div>
</template>

<script>
import api from '../common/api'
export default {
    name: 'basetable',
    data() {
        return {
            tableData: [],
            cur_page: 1,
            num1: 0,
            num2: 0,
            num3: 0,
            form: {
                name: '',
                date: '',
                time: ''
            },
            formInline: {
                user: '',
                region: ''
            },
            dialogFormVisible: false,
            objectionForm: {
                region: '',
                date: '',
                desc: ''
            },
            formLabelWidth: '120px'
        }
    },
    created() {
        this.getData();
    },
    computed: {
        data() {
            return this.tableData;
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        // 分页导航
        handleCurrentChange(val) {
            this.cur_page = val;
            this.getData();
        },
        // 获取 easy-mock 的模拟数据
        getData() {
            // test
            // this.$axios.post('api/nantian-parent/a/a.do?username=admin&password=123456').then(res => {
            //     console.log(res.data);
            // })
            // return;
            // 
            this.$axios.post(api.manhour.query).then((res) => {
                console.log(res.data);
                this.tableData = res.data.list;
            })
        },
        formatter(row, column) {
            // return row.address;
            return '-';
        },
        filterTag(value, row) {
            return row.tag === value;
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
</style>
