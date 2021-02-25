<template>
    <div>
        子组件
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        num: {
            type: String
        }
    },
    // 如果要接受父组件里面传过来的,就要在setup里面书写参数，第一个属性，就是这个参数
    /**
     * 第一个参数指的是穿过来的属性
     * 第二个参数是指上下文(可以接受 传值时，在字组件里面为定义的属性)
     * 上下文包括的属性：
       context.attrs
       context.slots
       context.parent
       context.root
       context.emit
       context.refs
     */
    /**
     * 
     */
    /*
    setup(props, context) {//这块也可以用结构赋值 把context换成结构赋值
        console.log("我是setup");
        console.log(props.num);
        // 用attrs 也可以接收
        console.log(context.attrs.text); //你好
        //获取夫组件 插槽传递过来的数据
        console.log(context.slots.default());
        context.emit("myEmit","我是逆向传值");
    },
    */
    setup(props, { attrs, slots, emit }) {
        console.log("我是setup");
        console.log(props.num);
        // 用attrs 也可以接收
        console.log(attrs.text); //你好
        //获取夫组件 插槽传递过来的数据
        console.log(slots.default());
        emit("myEmit", "我是逆向传值");
    },
}
</script>