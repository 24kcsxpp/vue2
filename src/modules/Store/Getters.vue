<template>
  <div>
    <div>Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</div>
    <h3>1、通过属性访问</h3>
    <button @click="getFullName">获取全名</button>
    <div>我的全名叫：{{name}}</div>
    <h3>2、mapGetters 辅助函数</h3>
    <div>我的全名是：{{fullName}}</div>
    <div>介绍语：{{introduceSelf}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    data(){
      return {
        name: ""
      };
    },
    methods:{
      getFullName(){
        this.name = this.$store.getters.fullName;
      }
    },
    computed:{
      ...mapGetters([
        'fullName',
        'introduceSelf'
      ])
    }
  }
</script>

<style scoped>

</style>
