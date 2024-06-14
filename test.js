/*
 * @Author: wangchao96
 * @Date: 2024-06-12 16:58:24
 * @LastEditors: wangchao96
 * @LastEditTime: 2024-06-14 17:45:07
 * @email: wangchao96@xdf.cn
 * @description: 功能介绍： 测试文件
 */
require('./index.js')

const testObj = {
    name: '王超'
}

function testCall(a, b, c, d) {
    return {
        sum: a + b + c + d,
        name: this.name
    }
}
const resultCall = testCall.w_call(testObj, 1, 2, 3, 4)
console.log(resultCall, '测试call')


function testApply(a, b, c, d) {
    return {
        sum: a + b + c + d,
        name: this.name
    }
}
const resultApply = testApply.w_apply(testObj, [1, 2, 3, 3])
console.log(resultApply, '测试apply')


function testBind(...arg) {
    return {
        sum: arg.reduce((val, item) => val += item, 0),
        name: this.name
    }
}
const resultBind = testBind.w_bind(testObj, 1, 2, 3, 3)(10)
console.log(resultBind, '测试bind')

function testNew(...arg) {
    const name = 'wangchao'
    return {}
}
testNew.prototype.getName = function() {
    return 'aaaaa'
}
const resultNew = w_new(testNew)
console.dir(resultNew.__proto__, {depth: null})
