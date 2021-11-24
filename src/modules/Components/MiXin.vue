<template>
  <div>
    <h3>1、基础</h3>
    <p>混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。</p>
    <div>打开f12查看示例，先执行混入的hello，在执行本模块的word</div>
    <h3>2、选项合并</h3>
    <div>2.1 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。示例同上。</div>
    <div>2.2 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。</div>
    <div>{{message}}--{{boo}}--{{foo}}</div>
    <div>2.3 值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。</div>
    <button @click="selfHello">本模块方法</button>
    <button @click="common">共有方法</button>
    <button @click="mixinHello">混入模块方法</button>
    <h3>3、全局混入</h3>
    <div>使用全局混入要慎重，每一个实例都会执行</div>
  </div>
</template>

<script>
import SayHello from "./mixin/SayHello";
  export default {
    mixins:[SayHello],
    data(){
      return {
        message: "我是本模块的信息",
        boo: "我是本模块的boo"
      };
    },
    created(){
      console.log("word")
    },
    methods:{
      selfHello(){
        alert("Self-Hello")
      },
      common(){
        alert("Self-Common:我会覆盖掉混入的方法")
      }
    }
  }
</script>

<style scoped>

</style>
