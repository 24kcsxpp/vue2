<template>
  <div>
    <div>以下为表单部分：</div>
    <div class="mt20">
      录入框：
      <v-input-value @onBlur="onBlur" :defaultValue="defaultValue"></v-input-value>
      <div>输入的值为：{{formData.inputValue}}</div>
    </div>
    <div class="mt20">
      单选框：
      <v-input-radio :radioList="radioList" name="fruits" @radioClick="radioClick"></v-input-radio>
    </div>
    <div class="mt20">
      复选框：
      <v-input-checkbox :checkboxList='checkboxList' name='food' @checkoutClick="checkoutClick"></v-input-checkbox>
    </div>
    <div class="mt20">表单数据：{{formData}}</div>
  </div>
</template>

<script>
import InputValue from "../../components/FormInput"
import FormRadio from "../../components/FormRadio"
import FormCheckBox from "../../components/FormCheckBox"
  export default {
    data(){
      return {
        formData:{
          inputValue: "",
          radioValue: "",
          selectList: []
        },
        defaultValue: "我是默认值",
        radioList:[
          { value: "1", text: "香蕉" },
          { value: "2", text: "苹果" },
          { value: "3", text: "橘子" }
        ],
        checkboxList:[
          { key: "1", value: "大米" },
          { key: "2", value: "白面" },
          { key: "3", value: "豆油" }
        ]
      };
    },
    components:{
      "v-input-value": InputValue,
      "v-input-radio": FormRadio,
      "v-input-checkbox": FormCheckBox,
    },
    methods:{
      onBlur(value){
        this.formData.inputValue = value;
      },
      radioClick(value){
        this.formData.radioValue = value;
      },
      checkoutClick(value){
        this.formData.selectList = value;
      }
    }
  }
</script>

<style scoped>
.mt20{
  margin-top: 20px;
}
</style>
