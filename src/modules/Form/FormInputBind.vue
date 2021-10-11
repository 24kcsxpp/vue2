<template>
  <div>
    <h3>1、基础用法</h3>
    <div>
      1.1
      介绍：我们可以使用v-model指令在input、textarea以及select等元素上创建双向数据绑定。其本身就是一个语法糖。v-model在内部为不同的输入元素使用不同得property并抛出不同得事件。
    </div>
    <div>1.2 文本</div>
    <el-input v-model="inputMessage" placeholder="请输入"></el-input>
    <p>输入内容为：{{ inputMessage }}</p>
    <div>1.3 多行文本</div>
    <textarea v-model="textareaMsg" placeholder="请输入多行文本"></textarea>
    <p>输入内容为：{{ textareaMsg }}</p>
    <div>1.4 复选框</div>
    <div>单个复选框，绑定到布尔值</div>
    <input type="checkbox" v-model="checkboxChecked" />
    <label for="checkbox">{{ checkboxChecked }}</label>
    <div>多个复选框，绑定到同一个数组</div>
    <input type="checkbox" value="Jack" v-model="checkboxList" />
    <label for="">Jack</label>
    <input type="checkbox" value="John" v-model="checkboxList" />
    <label for="">John</label>
    <input type="checkbox" value="Mike" v-model="checkboxList" />
    <label for="">Mike</label>
    <br />
    <span>选中得名字为：{{ checkboxList }}</span>
    <div>1.5 单选按钮</div>
    <input type="radio" value="张三" v-model="radioName" />
    <label for="">张三</label>
    <input type="radio" value="李四" v-model="radioName" />
    <label for="">李四</label>
    <br>
    <span>选中的名字为：{{radioName}}</span>
    <div>1.6 下拉选择框</div>
    <div>单选</div>
    <select name="" id="" v-model="selectedSimple">
      <option value="">请选择</option>
      <option value="1">张三</option>
      <option value="2">李四</option>
    </select>
    <span>选择的为：{{selectedSimple}}</span>
    <div>多选</div>
    <select name="" id="" multiple v-model="selectedMultiple">
      <option value="1">张三</option>
      <option value="2">李四</option>
      <option value="3">王五</option>
    </select>
    <span>选中得人有：{{selectedMultiple}}</span>
    <div>2、绑定值</div>
    <div>很多时候，我们选择了表单的某一项，并不是想上送true和false，而是像绑定试图得某一个值，比如说：我有一个复选框，当我选中得时候，我的值为当时试图得另一个变量，具体代码如下：
    </div>
    <input type="radio" v-model="checkboxChange" :value="changeValue">
    <label for="">是否选中</label>
    <div>选中后得值为:{{checkboxChange}}</div>
    <div>3、修饰符</div>
    <div>3.1 .lazy：v-model在每次input事件触发后将值进行同步，我们可以添加lazy修饰符，从而转为在change事件之后进行同步</div>
    <input type="text" v-model.lazy="inputLazy">
    <div>3.2 .number：如果像自动将用户的输入值转换为数值类型，可以给v-model添加number修饰符(即使type事number，实际得到的值也是字符串)</div>
    <input type="number" v-model.number="inputNumber">
    <div>3.3 .trim：去除输入得首尾空格</div>
    <input type="text" v-model.trim="inputTrim">
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputMessage: "",
      textareaMsg: "",
      checkboxChecked: false,
      checkboxList: [],
      radioName: "",
      selectedSimple: "",
      selectedMultiple: [],
      checkboxChange: "",
      changeValue: "我就是选中后得值",
      inputLazy: "",
      inputNumber: "",
      inputTrim: ""
    };
  },
};
</script>

<style scoped>
</style>
