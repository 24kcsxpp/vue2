<template>
  <div>
    <h1>欢迎来到组件篇</h1>
    <h3>以下是组件篇的学习内容</h3>
    <div v-for="(item,index) in componentsList"
        :key="index"
        class="base_list"
        @click="goInfo(item.url)">{{index + 1 + '、'}}{{item.name}}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        componentsList:[
          {
            name:"组件间的传值方式",
            url:"/Components/TransmissionType"
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
