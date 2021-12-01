<template>
  <div>
    <div>由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块</div>
    <h3>1、定义一个module：Bank</h3>
    <div>获取state中的bankName：{{$store.state.bank.bankName}}</div>
    <div>获取getters中的地址：{{$store.getters.getBankAddress}}</div>
    <div>通过mutations修改访问量：{{$store.state.bank.bankVisit}}</div>
    <button @click="updataBankVisit">更新访问量</button>
    <div>在getter中获取根节点的数据：{{$store.getters.getParentInfo}}</div>
    <h3>2、命名空间</h3>
    <div>默认不加命名空间的module其实是注册在全局的，这种情况下，当我们维护的module多了的时候，会导致命名冲突，如果我们使用命名空间就不会出现这样的问题，因为变量前面会增加“module的名称加/”。下方示例需要放开Bank.js中的namespaced</div>
    <div>例如：{{getBankAddress}}</div>
  </div>
</template>

<script>
  export default {
    methods:{
      updataBankVisit(){
        this.$store.commit("updataBankVisit");
      }
    },
    computed:{
      getBankAddress(){
        console.log(this.$store)
        return this.$store.getters["bank/getBankAddress"]
      }
    }
  }
</script>

<style scoped>

</style>
