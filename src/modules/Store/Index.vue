<template>
  <div>
    <h1>欢迎来到状态篇</h1>
    <h3>以下是状态篇的学习内容</h3>
    <div
      v-for="(item,index) in baseList"
      :key="index"
      class="base_list"
      @click="goInfo(item.url)"
    >{{index + 1 + '、'}}{{item.name}}</div>
  </div>
</template>

<script>
export default {
  data(){
      return {
        baseList:[
          {
            name:'State篇',
            url:'/Store/State'
          },
          {
            name:'Getters篇',
            url:'/Store/Getters'
          },
          {
            name:'Mutations篇',
            url:'/Store/Mutations'
          },
          {
            name:'Modules篇',
            url:'/Store/Modules'
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
};
</script>

<style scoped>
.base_list{
  color: green;
  cursor: pointer;
}
</style>
