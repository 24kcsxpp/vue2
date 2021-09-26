<template>
  <div>
    <div>1、当我们需要将一个有规则的字符串转换成另一个规则的字符串的时候：2021/09/26转化为2021-09-26</div>
    <div>a、我们可以这样写</div>
    <div>{{date.split('/').join('-')}}</div>
    <div>b、我们可以使用计算属性</div>
    <div>{{computedDate}}</div>
    <el-button @click="date = '2000/01/01'">更改日期为2000/01/01</el-button>
    <div>我们完全可以定义一个方法来实现，为什么要选择计算属性呢，因为计算属性存在缓存，在依赖的值没有变化的情况下，不需要重新计算</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        date: '2021/09/26'
      }
    },
    computed:{
      computedDate(){
        return this.date.split('/').join('-');
      }
    }
  }
</script>

<style scoped>

</style>
