<template>
  <div>
    <div>1、当我们需要将一个有规则的字符串转换成另一个规则的字符串的时候：2021/09/26转化为2021-09-26</div>
    <div>a、我们可以这样写</div>
    <div>{{date.split('/').join('-')}}</div>
    <div>b、我们可以使用计算属性</div>
    <div>{{computedDate}}</div>
    <el-button @click="date = '2000/01/01'">更改日期为2000/01/01</el-button>
    <div>我们完全可以定义一个方法来实现，为什么要选择计算属性呢，因为计算属性存在缓存，在依赖的值没有变化的情况下，不需要重新计算</div>
    <div>2、当我们其中一个数据发生改变的时候需要做一些事情，可以使用watch监听</div>
    <div>`{{num1}}+{{num2}}={{total}}`</div>
    <el-button @click="num2++">第二个参数加一</el-button>
    <div>3、计算属性默认只有getter属性，不过如果需要的话也可以加setter属性</div>
    <div>firstName:{{firstName}}</div>
    <div>lastName:{{lastName}}</div>
    <div>计算属性fullName:{{fullName}}</div>
    <el-button @click="fullName = '尼古拉斯-赵四'">为fullName赋值：尼古拉斯-赵四</el-button>
    <div>4、watch常用于数据变更时有异步操作</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        date: '2021/09/26',
        num1: 1,
        num2: 2,
        total: 3,
        firstName: "詹姆斯",
        lastName: "邦德"
      }
    },
    watch:{
      num2(val){
        this.total = val + 1;
      }
    },
    computed:{
      computedDate(){
        return this.date.split('/').join('-');
      },
      fullName:{
        get(){
          return this.firstName + '-' + this.lastName;
        },
        set(full){
          let list = full.split('-');
          this.firstName = list[0];
          this.lastName = list[1];
        }
      }
    }
  }
</script>

<style scoped>

</style>
