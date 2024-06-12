/*
 * @Author: wangchao96
 * @Date: 2024-06-12 16:41:43
 * @LastEditors: wangchao96
 * @LastEditTime: 2024-06-12 17:32:01
 * @email: wangchao96@xdf.cn
 * @description: 功能介绍： call apply bind  new 
 */

/**
 * call
 * 传参： 第一个是新的this指向， 后面参数任意多个
 * 改变this指向为第一个参数
 * 立即执行
 * 返回执行结果
 */
Function.prototype.w_call = function(context, ...arg) {
    context = context || {}
    context.fn = this
    return context.fn(...arg)
}

/**
 * apply
 * 传参： 第一个是新的this指向， 后面参数只能是一个数组
 * 改变this指向为第一个参数
 * 立即执行
 * 返回执行结果
 */
Function.prototype.w_apply = function(context, arg) {
    if (Object.prototype.toString.call(arg).split(' ')[1].slice(0, -1) !== 'Array') throw('w_apply传参只支持数组')
    context = context || {}
    context.fn = this
    return context.fn(...arg)
}