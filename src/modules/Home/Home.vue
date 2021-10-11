<template>
  <div class="start">
    <img src="@/assets/logo.png" alt="">
    <h1>{{msg}}</h1>
    <div class="study">
      <el-button
        v-for="(item,index) in studyList"
        :key="index"
        @click="goInfo(item)">{{item.name}}</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg: '欢迎来到VUE2版本的学习时刻',
        studyList: [
          {
            name: '基础篇',
            url: '/Base/Index'
          },
          {
            name: '组件篇',
            url: '/Components/Index'
          },
          {
            name: '表单篇',
            url: '/Form/Index'
          },
          {
            name: '路由篇',
            url: '/Router/Index'
          },
          {
            name: '状态管理篇',
            url: '/Store/Index'
          }
        ]
      };
    },
    methods:{
      goInfo(item){
        this.$router.push({
          path: item.url
        });
      }
    }
  }
</script>

<style scoped>
.start {
  text-align: center;
}
.study{
  display: flex;
  justify-content: center;
  align-items: center;
}
.study_item{
  width: 100px;
  height: 40px;
  border: 1px solid rgb(86, 216, 25);
}
</style>
