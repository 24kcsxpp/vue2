<template>
  <div>
    <input type="text"
      v-model="inputValue"
      :placeholder="placeholder"
      @blur="onBlur">
  </div>
</template>

<script>
  export default {
    data(){
      return {
        value: ""
      };
    },
    props:{
      placeholder:{
        type: String,
        default: "请输入"
      },
      defaultValue:{
        type: String,
        default: ""
      }
    },
    created(){
      this.inputValue = this.defaultValue;
    },
    computed:{
      inputValue:{
        set(val){
          this.value = this.defaultValue || val;
        },
        get(){
          return this.value;
        }
      }
    },
    methods:{
      onBlur(){
        this.$emit("onBlur",this.value)
      }
    }
  }
</script>

<style scoped>

</style>
