(function () {
    //私有数据
    let msg = 'Wzj'
    //操作数据的函数
    function doSomething() {
        console.log('doSometing()'+ msg.toUpperCase())

    }
    function doOtherthing () {
        console.log('doOtherting()'+ msg.toLowerCase())
    }
    //向外暴露对象（给外部使用的方法）
    window.module2 = {
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }
})()