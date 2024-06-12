/*
 * @Author: wangchao96
 * @Date: 2024-06-12 16:58:24
 * @LastEditors: wangchao96
 * @LastEditTime: 2024-06-12 17:32:50
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


function testCall(a, b, c, d) {
    return {
        sum: a + b + c + d,
        name: this.name
    }
}
const resultApply = testCall.w_apply(testObj, [1, 2, 3, 3])
console.log(resultApply, '测试apply')