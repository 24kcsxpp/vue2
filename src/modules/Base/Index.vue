<template>
  <div>
    <h1>欢迎来到基础篇</h1>
    <h3>以下是基础篇的学习内容</h3>
    <div v-for="(item,index) in baseList"
        :key="index"
        class="base_list"
        @click="goInfo(item.url)">{{index + 1 + '、'}}{{item.name}}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        baseList:[
          {
            name:'VUE实例和模板语法',
            url:'/Base/ExampleOrTemp'
          },
          {
            name:'计算属性和侦听器',
            url:'/Base/ComputedOrWatch'
          },
          {
            name:'Class与Style绑定',
            url:'/Base/ClassOrStyle'
          }
        ]
      }
    },
    methods:{
      goInfo(url){
        this.$router.push({
          path: url
        })
      }
    }
  }
</script>

<style scoped>
.base_list{
  color: green;
  cursor: pointer;
}
</style>
