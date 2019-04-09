import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/manhour/query',
                    component: resolve => require(['../components/manHour/Query.vue'], resolve),
                    meta: { title: '工时管理' }
                },
                {
                    path: '/manhour/import',
                    component: resolve => require(['../components/manHour/Import.vue'], resolve),
                    meta: { title: '工时导入' }
                },
                {
                    path: '/manhour/objection',
                    component: resolve => require(['../components/manHour/Objection.vue'], resolve),
                    meta: { title: '异议处理' }
                },
                {
                    path: '/holiday/query',
                    component: resolve => require(['../components/holiday/Query'], resolve),
                    meta: { title: '请假查询' }
                },
                {
                    path: '/holiday/import',
                    component: resolve => require(['../components/holiday/Import'], resolve),
                    meta: { title: '批量导入' }
                },
                {
                    path: '/holiday/application',
                    component: resolve => require(['../components/holiday/Application'], resolve),
                    meta: { title: '请假申请' }
                },
                {
                    path: '/holiday/annualLeave',
                    component: resolve => require(['../components/holiday/AnnualLeave'], resolve),
                    meta: { title: '年假查询' }
                },
                {
                    path: '/customer/query',
                    component: resolve => require(['../components/customer/Query'], resolve),
                    meta: { title: '客户管理' }
                },
                {
                    path: '/customer/category',
                    component: resolve => require(['../components/customer/Category'], resolve),
                    meta: { title: '类别管理' }
                },
                {
                    path: '/customer/unitprice',
                    component: resolve => require(['../components/customer/UnitPrice'], resolve),
                    meta: { title: '单价查询' }
                },
                {
                    path: '/statistics/manhour',
                    component: resolve => require(['../components/statistics/Manhour'], resolve),
                    meta: { title: '工时统计' }
                },
                {
                    path: '/statistics/employee',
                    component: resolve => require(['../components/statistics/Employee'], resolve),
                    meta: { title: '员工统计' }
                },
                {
                    path: '/statistics/leave',
                    component: resolve => require(['../components/statistics/Leave'], resolve),
                    meta: { title: '请假统计' }
                },
                {
                    path: '/department/manage',
                    component: resolve => require(['../components/department/Manage'], resolve),
                    meta: { title: '部门管理' }
                },
                {
                    path: '/employee/manage',
                    component: resolve => require(['../components/employee/Manage'], resolve),
                    meta: { title: '信息管理' }
                },
                {
                    path: '/employee/alias',
                    component: resolve => require(['../components/employee/Alias'], resolve),
                    meta: { title: '别名管理' }
                },
                {
                    path: '/employee/proinfo',
                    component: resolve => require(['../components/employee/ProjectInfo'], resolve),
                    meta: { title: '项目信息' }
                },
                {
                    path: '/employee/detail',
                    component: resolve => require(['../components/employee/DetailInfo'], resolve),
                    meta: { title: '查看详情' }
                },
                {
                    path: '/system/password',
                    component: resolve => require(['../components/system/Password'], resolve),
                    meta: { title: '密码管理' }
                },
                {
                    path: '/system/parameters',
                    component: resolve => require(['../components/system/Parameters'], resolve),
                    meta: { title: '参数管理' }
                },
                {
                    path: '/system/holiday',
                    component: resolve => require(['../components/system/Holiday'], resolve),
                    meta: { title: '假日管理' }
                },
                {
                    path: '/message',
                    component: resolve => require(['../components/system/Message'], resolve),
                    meta: { title: '我的信息' }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
