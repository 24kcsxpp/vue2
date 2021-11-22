<template>
  <div>
    <h3>1、父组件向子组件传递值</h3>
    <div>父组件向子组件传递值得时候，需要在子组件上绑定值，子组件在props中去接受传过来的值，例子：title组件</div>
    <h3>2、子组件向父组件传值</h3>
    <div>子组件向父组件传值的时候，需要用$emit创建一个方法，并将要传递的值当做第二个参数传进去；父组件通过该方法注册一个事件。示例：点击更新时间</div>
    <button @click="changeValue">更改value</button>
    <v-input :inputValue="inputValue"></v-input>
    <h3>3、插槽</h3>
    <div>3.1 当我们什么都不写的时候，默认显示组件内容，包括插槽里面的内容</div>
    <v-content-slot></v-content-slot>
    <div>3.2 我们可以在组件内编写内容，内容会覆盖掉默认插槽的内容</div>
    <v-content-slot>
      <template>
        更改默认插槽内容
      </template>
    </v-content-slot>
    <div>3.3 如果想更改具名插槽的内容，temtlate需要加上定好的name值</div>
    <v-content-slot>
      <template #left>
        填充左侧插槽内容
      </template>
    </v-content-slot>
    <div>3.4 作用域插槽：在组建中可以绑定数据，在实际使用中可以是已v-slot:left(具体插槽名称)="变量名"，实际使用就可以已变量名.的形式去使用，例子为：左侧插槽；
    也可以利用ES6解构赋值，例子为：右侧插槽</div>
    <v-content-slot>
      <template v-slot:left="changeSlotInfo">
        {{changeSlotInfo.changeSlotInfo.leftValue}}
      </template>
      <template v-slot:right="{changeSlotInfo}">
        {{changeSlotInfo.rightValue}}
      </template>
    </v-content-slot>
  </div>
</template>

<script>
import vInput from "../../components/Input";
import vContentSlot from "../../components/ContentSlot";
export default {
  data() {
    return {
      time: "",
      inputValue: ""
    };
  },
  components: {
    "v-input": vInput,
    "v-content-slot": vContentSlot
  },
  methods: {
    changeValue() {
      this.inputValue = "我是父组件的值";
    }
  }
};
</script>

<style scoped>
</style>
