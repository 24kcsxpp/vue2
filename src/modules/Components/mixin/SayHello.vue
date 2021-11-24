<template>
  <div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        message: "我是混入的信息",
        foo: "混入的foo"
      };
    },
    created(){
      console.log("hello")
    },
    methods:{
      mixinHello(){
        alert("MiXin-Hello")
      },
      common(){
        alert("MiXin-Common")
      }
    }
  }
</script>

<style scoped>

</style>
