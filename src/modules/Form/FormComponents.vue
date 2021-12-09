<template>
  <div>
    <div>以下为表单部分：</div>
    <div class="mt20">
      录入框：
      <v-input-value @onBlur="onBlur" :defaultValue="defaultValue"></v-input-value>
      <div>输入的值为：{{formData.inputValue}}</div>
    </div>
    <div class="mt20">
      <v-input-radio :radioList="radioList" name="fruits" @radioClick="radioClick"></v-input-radio>
    </div>
    <div>表单数据：{{formData}}</div>
  </div>
</template>

<script>
import InputValue from "../../components/FormInput"
import FormRadio from "../../components/FormRadio"
  export default {
    data(){
      return {
        formData:{
          inputValue: "",
          radioValue: ""
        },
        defaultValue: "",
        radioList:[
          {
            value: "1",
            text: "香蕉"
          },
          {
            value: "2",
            text: "苹果"
          },
          {
            value: "3",
            text: "橘子"
          }
        ]
      };
    },
    components:{
      "v-input-value": InputValue,
      "v-input-radio": FormRadio,
    },
    methods:{
      onBlur(value){
        this.formData.inputValue = value;
      },
      radioClick(value){
        this.formData.radioValue = value;
      }
    }
  }
</script>

<style scoped>
.mt20{
  margin-top: 20px;
}
</style>
