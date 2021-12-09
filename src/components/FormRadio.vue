<template>
  <div>
    <label v-for="(item,index) in radioList" :key="index">
      <input type="radio" :name="name" :value="item.value" @click="onClick(item.value)">{{item.text}}
    </label>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        value: ""
      }
    },
    props:{
      radioList:{
        type: Array,
        default: []
      },
      name:{
        type: String,
        default: "radio"
      }
    },
    methods:{
      onClick(value){
        this.$emit("radioClick",value);
      }
    },
    computed:{
      inputValue:{
        set(){
          this.value = this.inputValue || this.radioValue;
        },
        get(){
          return this.value;
        }
      }
    }
  }
</script>

<style scoped>

</style>
