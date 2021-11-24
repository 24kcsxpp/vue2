<template>
  <div>
    <h3>1、在 Vue 组件中获得 Vuex 状态</h3>
    <div>我们可以在计算属性中使用：{{firstName}}</div>
    <div>我们可以直接绑定在data中：{{lastName}}</div>
    <h3>2、mapState 辅助函数</h3>
    <div>我们可以引入mapState函数通过扩展运算符的方式引入</div>
    <div>我的性别是：{{sex}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data(){
      return {
        lastName: this.$store.state.lastName
      }
    },
    computed:{
      firstName(){
        return this.$store.state.firstName;
      },
      ...mapState([
        'sex'
      ])
    }
  }
</script>

<style scoped>

</style>
