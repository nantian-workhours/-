import Vue from 'vue'

// 默认值处理
Vue.prototype.defaultFmt = function (row, col, cellval){
    return typeof cellval === 'undefined' ? '-' : cellval;
}