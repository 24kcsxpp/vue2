<template>
  <div>
    <input type="text" v-model="value" placeholder="">
    <div>输入框的值：{{sonValue}}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        value: ""
      };
    },
    model:{
      prop: 'checkValue'
    },
    props:{
      inputValue:{
        type: String,
        default: ""
      }
    },
    computed:{
      sonValue(){
        return this.inputValue || this.value;
      }
    }
  }
</script>

<style scoped>

</style>
