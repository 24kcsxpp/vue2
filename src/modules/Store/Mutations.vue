<template>
  <div>
    <div>更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。</div>
    <h3>1、提交载荷（Payload）</h3>
    <div>你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）</div>
    <button @click="changeAge()">自然更改年龄</button>
    <button @click="changeAge(5)">年龄加5</button>
    <div>当前年龄：{{$store.state.age}}</div>
    <h3>2、在组件中提交 Mutation</h3>
    <button @click="changeSex">切换性别</button>
    <div>我的性别是：{{$store.state.sex}}</div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
  export default {
    data(){
      return {
        age: this.$store.state.age
      }
    },
    methods:{
      changeAge(num){
        this.$store.commit("ageUp",num)
      },
      ...mapMutations([
        'ageUp',
        'changeSex'
      ])
    }
  }
</script>

<style scoped>

</style>
