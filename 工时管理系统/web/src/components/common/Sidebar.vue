<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index" class="sub-title">
                                {{ subItem.title}}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: true,
                items: [
                    {
                        icon: 'el-icon-lx-home',
                        index: '/dashboard',
                        title: '系统首页'
                    },
                    {
                        icon: 'el-icon-lx-remind',
                        index: '2',
                        title: '工时管理',
                        subs: [
                            {
                                index: '/manhour/query',
                                title: '工时查询'
                            },
                            {
                                index: '/manhour/import',
                                title: '工时导入'
                            },
                            {
                                index: '/manhour/objection',
                                title: '异议处理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-recharge',
                        index: '3',
                        title: '统计查询',
                        subs: [
                            {
                                index: '/statistics/manhour',
                                title: '工时统计'
                            },
                            {
                                index: '/statistics/employee',
                                title: '员工统计'
                            },
                            {
                                index: '/statistics/leave',
                                title: '请假统计'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-calendar',
                        index: '4',
                        title: '请假管理',
                        subs: [
                            {
                                index: '/holiday/query',
                                title: '请假查询'
                            },
                            {
                                index: '/holiday/import',
                                title: '批量导入'
                            },
                            {
                                index: '/holiday/application',
                                title: '请假申请'
                            },
                            {
                                index: '/holiday/annualLeave',
                                title: '年假查询'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-addressbook',
                        index: '5',
                        title: '客户管理',
                        subs: [
                            {
                                index: '/customer/query',
                                title: '客户查询'
                            },
                            {
                                index: '/customer/category',
                                title: '类别管理'
                            },
                            {
                                index: '/customer/unitprice',
                                title: '单价管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-profile',
                        index: '/department/manage',
                        title: '部门管理'
                    },
                    {
                        icon: 'el-icon-lx-friend',
                        index: '/icon',
                        title: '员工管理',
                        subs: [
                            {
                                index: '/employee/manage',
                                title: '信息管理'
                            },
                            {
                                index: '/employee/alias',
                                title: '别名管理'
                            },
                            {
                                index: '/employee/proinfo',
                                title: '所在项目'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-settings',
                        index: '6',
                        title: '系统管理',
                        subs: [
                            {
                                index: '/system/password',
                                title: '密码管理'
                            },
                            {
                                index: '/system/parameters',
                                title: '参数管理'
                            },
                            {
                                index: '/system/holiday',
                                title: '节假日管理'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 180px;
    }
    .sidebar > ul {
        height:100%;
    }
    .sidebar .sub-title{
        padding-left: 50px !important;
    }
</style>
