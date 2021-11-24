<template>
  <div>
    <h1>欢迎来到表单篇</h1>
    <h3>以下是表单篇的学习内容</h3>
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
            name:'表单输入绑定',
            url:'/Form/FormInputBind'
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
