<template>
<div class="table">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-lx-remind"></i> 客户管理</el-breadcrumb-item>
            <el-breadcrumb-item> 类别管理</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <el-form :inline="true" label-width="80px">
            <el-form-item label="客户类别">
                <el-select v-model="queryForm.region" placeholder="请选择">
                    <el-option label="中国银行" value="zhonghang"></el-option>
                    <el-option label="中国人寿" value="renshou"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" @click="dialogFormVisible = true">新增客户类别</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" border class="table">
            <el-table-column prop="custtype" label="客户类别"></el-table-column>
            <el-table-column prop="worktype" label="工作类别" :formatter="worktypeFmt"></el-table-column>
            <el-table-column prop="levels" label="技术等级" :formatter="levelFmt"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-edit">编辑</el-button>
                    <el-button type="text" icon="el-icon-delete" class="red">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- dialog -->
        <el-dialog title="新增客户类别" :visible.sync="dialogFormVisible">
            <el-form :model="form" class="dialog-form-width">
                <el-form-item label="客户类别名称" :label-width="formLabelWidth">
                    <el-input v-model="category.name"></el-input>
                </el-form-item>
                <el-form-item label="工作类别" :label-width="formLabelWidth">
                    <el-select v-model="category.worktype" multiple filterable allow-create default-first-option placeholder="请选择">
                        <el-option label="软件开发" value="01"></el-option>
                        <el-option label="软件测试" value="02"></el-option>
                    </el-select>
                    <el-popover placement="bottom" width="400" trigger="click" style="margin-left: 10px;">
                        <el-input placeholder="请输入工作类别" v-model="inputVal" class="input-with-select">
                            <el-button slot="append" icon="el-icon-lx-add"></el-button>
                        </el-input>
                        <el-button type="danger" slot="reference">添加</el-button>
                    </el-popover>
                </el-form-item>
                <el-form-item label="技术等级" :label-width="formLabelWidth">
                    <el-select v-model="category.level" multiple filterable allow-create default-first-option placeholder="请选择">
                        <el-option label="初级" value="01"></el-option>
                        <el-option label="中级" value="02"></el-option>
                        <el-option label="高级" value="03"></el-option>
                        <el-option label="一级" value="04"></el-option>
                        <el-option label="二级" value="05"></el-option>
                        <el-option label="三级" value="06"></el-option>
                        <el-option label="四级" value="07"></el-option>
                    </el-select>
                    <el-popover placement="bottom" width="400" trigger="click" style="margin-left: 10px;">
                        <el-input placeholder="请输入技术等级" v-model="inputVal" class="input-with-select">
                            <el-button slot="append" icon="el-icon-lx-add"></el-button>
                        </el-input>
                        <el-button type="danger" slot="reference">添加</el-button>
                    </el-popover>
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
export default {
    data() {
        return {
            date: '',
            queryForm: {},
            tableData: [{
                custtype: '中国银行',
                worktype: ['软件开发'],
                levels: ['一级', '二级', '三级', '四级', '五级']
            },{
                custtype: '中国银行',
                worktype: ['软件测试'],
                levels: ['一级', '二级', '三级']
            },{
                custtype: '中国人寿',
                worktype: ['软件开发'],
                levels: ['初级', '中级', '高级']
            },{
                custtype: '中国人寿',
                worktype: ['软件测试'],
                levels: ['初级', '中级', '高级']
            }],
            category: {},
            dialogFormVisible: false,
            inputVal: '',
            form: {
                startDate: '',
                endDate: '',
                region: '',
                desc: ''
            },
            formLabelWidth: '120px'
        }
    },
    components: {

    },
    methods: {
        worktypeFmt(row, column) {            
            return row.worktype.join(' | ');
        },
        levelFmt(row, column) {            
            return row.levels.join(' | ');
        }
    }
}
</script>

<style scoped>

</style>
