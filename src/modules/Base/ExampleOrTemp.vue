<template>
  <div>
    <div>1、展示数据使用'{{}}'符号</div>
    <div>Message：{{msg}}</div>
    <div>2、绑定自定义属性：使用v-bind(简化为:)</div>
    <div>v-bind:id="dynamicId"</div>
    <div>3、模板中支持输入简单的js表达式</div>
    <div>{{number + 1}}</div>
    <div>4、指令：是带有v-前缀的属性</div>
    <div v-if="seen">我是v-if，你现在可以看见我了</div>
    <el-button @click="centerDialogVisible = true">我是v-on，你可以点击我</el-button>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>哇，你点击了人家</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <div>5、动态参数：可以用方括号括起来的 JavaScript 表达式作为一个指令的参数，动态参数预期会求出一个字符串</div>
    <div v-on:[eventName]="doSomething"></div>
  </div>
</template>

<script>
// 此处为一个vue实例，包含生命周期、data、methods、computed等方法
export default {
  // data用来存放实例数据
  data() {
    return {
      msg: "我是data中的某一条数据",
      bindHtml: '<div v-bind:id="dynamicId"></div>',
      number: 23,
      seen: true,
      centerDialogVisible: false,
      eventName: 'click'
    };
  },
  // 常用语页面挂载之前数据处理操作
  created() {},
  // 页面挂载后的一些操作
  mounted() {},
  // 绑定方法
  methods: {
    doSomething(){}
  },
  // 计算属性
  computed: {}
};
</script>

<style scoped>
</style>
