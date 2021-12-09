<template>
  <div>
    <label v-for="item in checkboxList" :key="item.key">
      <input type="checkbox" :name="name" :value='item.key' @click="onClick(item.key)">{{item.value}}
    </label>
  </div>
</template>

<script>
  export default {
    props:{
      name:{
        type: String,
        default: 'checkbox'
      },
      checkboxList:{
        type: Array,
        default: []
      }
    },
    data(){
      return {
        selectList:[]
      }
    },
    methods:{
      onClick(value){
        if(this.selectList.indexOf(value)>-1){
          this.selectList = this.$utils.without(this.selectList,value);
        }else{
          this.selectList.push(value);
        }
        this.$emit("checkoutClick",this.selectList);
      }
    }
  }
</script>

<style scoped>

</style>
