import Mock from 'mockjs';
import api from './components/common/api';

// 工时查询接口数据
Mock.mock(api.manhour.query, () => {
    return Mock.mock({
        'list|5-30': [{
            "date|+1": '2019-01-22',
            "name": '@cname',
            "platform": "开放平台",
            "workType": "X1",
            "workplace": "北京市海淀区",
            "proName": "中国人寿",
            "proDpmt": "资源中心二部",
            "normalHour|+1": [8,'请假', '8+2'],
            "normalHours": 156,
            "addedHours|1-5": 3.5,
            "signinTime": '08:36:20',
            "signBackTime": '@time()'
        }],
        code: 0
    });
});
// 异议接口数据
Mock.mock(api.manhour.objection, () => {
    return Mock.mock({
        'list|1-10': [{
            "name": '@cname',
            "type|+1": ['加班', '请假'],
            "date": '@date("yyyy-MM-dd")',
            "content": "@csentence(15)",
            "progress|+1": ['处理完成', '待处理']
        }],
        code: 0
    });
});

// 请假查询接口数据
Mock.mock(api.holiday.query, () => {
    return Mock.mock({
        'list|1-10': [{
            "name": '罗杰',
            "dept": '软件资源二中心三部',
            "vacation": 5,
            "days": 2,
            "date1": '2019-02-20',
            "date2": '2019-02-21',
            "type|+1": ['事假', '调休'],
            "auditStatus|+1": ['审核中', '通过', '退回'],
            "explain": "@csentence(15)"
        }],
    });
});
// 请假查询接口数据
Mock.mock(api.project.query, () => {
    return Mock.mock({
        'list|1-10': [{
            'department|+1': ['软件资源二中心一部', '软件资源二中心二部'],
            'proName|+1': ['银联移动支付项目', '全球缓释管理系统项目', '公司金融贷后管理项目'],
            'proAddr': '北京市海淀区',
            'custtype': '中国银行',
            'proManager': '@cname',
            'proNumber|1-100': 1,
            'explain': '@csentence(10)'
        }],
    });
});
// 单价查询接口数据
Mock.mock(api.settlement.query, () => {
    return Mock.mock({
        'list|1-10': [{
            'customerCategory|+1': ['中国银行', '中国人寿', '中国邮政储蓄'],
            'proName': '@csentence(10)',
            'workCategory|+1': ['开发', '测试'],
            'level|+1': ['初级', '中级', '高级'],
            'levelUnitPrice|+1': [1350, 1000, 800],
            'startDate': '2018-01-01',
            'endDate': '2019-12-31',
        }],
    });
});
// 员工查询接口数据
Mock.mock(api.employee.query, () => {
    return Mock.mock({
        'list|1-10': [{
            'name': '@cname',
            'status|+1': ['在职', '离职'],
            'idno': '@id',
            'dept': '软件资源二中心二部',
            'group': '中国银行',
            'alias': '@cname'
        }],
    });
});