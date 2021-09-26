<template>
  <div>
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg: '我是Home页面'
      };
    },
    created(){
      console.log(111)
    }
  }
</script>

<style scoped>

</style>
