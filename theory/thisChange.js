/*
 * @Author: wangchao96
 * @Date: 2024-06-12 16:41:43
 * @LastEditors: wangchao96
 * @LastEditTime: 2024-06-14 17:51:33
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

/**
 * bind
 * 传参: 第一个是新的this指向，后面参数任意多个
 * 改变this指向为第一个参数
 * 不立即执行
 * 返回新的方法，该方法可以做构造函数
 */
Function.prototype.w_bind = function(context, ...arg1) {
    const that = this
    const bound = function(...arg2) {
        const arg = [...arg1, ...arg2]
        if (this instanceof bound) {
            const result = that.call(this, ...arg)
            return (typeof result === 'object' && result !== null) ? result : this
        } else {
            console.log(...arg)
            return that.call(context, ...arg)
        }

    }
    bound.prototype = Object.create(this.prototype)
    bound.prototype.constructor = bound
    return bound
}

/**
 * new
 * 返回一个对象
 * 改变this指向为该对象
 * 对象的原型链上继承形参原型
 * 立即执行
 */
function w_new(execution, ...arg) {
    const obj = {}
    obj.__proto__ = execution.prototype
    const result = execution.call(obj, ...arg)
    return (typeof result === 'object' && result !== null) ? result : obj
}
