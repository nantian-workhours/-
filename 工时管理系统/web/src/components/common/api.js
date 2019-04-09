// 工时系统api接口配置文件
const _prefix = '/api';
const api = {
    // 系统管理-参数管理
    params: {
        typeQuery: _prefix + '/params/typeQuery.do', // 类别-查询所有
        typeAdd: _prefix + '/params/typeAdd.do', // 类别-添加
        typeDelete: _prefix + '/params/typeDelete.do', // 类别-删除
        subTypeQuery: _prefix + '/params/subTypeQuery.do', // 子类别-查询所有
        subTypeAdd: _prefix + '/params/subTypeAdd.do', // 子类别-添加
        subTypeDelete: _prefix + '/params/subTypeDelete.do', // 子类别-单条删除
        subTypeDeleteByDicType: _prefix + '/params/subTypeDeleteByDicType.do', // 子类别-根据类别批量删除
    },
    department: {
        add: _prefix + '/department/add.do'
    },

    // mock
    manhour: {
        query: '/manhour/query',
        objection: '/manhour/objection'
    },
    holiday: {
        query: '/holiday/query'
    },
    project: {
        query: '/customer/query'
    },
    settlement: {
        query: '/settlement/query'
    },
    employee: {
        query: '/employee/query'
    }
}
export default api;