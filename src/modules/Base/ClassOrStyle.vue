<template>
  <div>
    <div :class="{colorRed:colorType}">1、动态绑定class样式（:class='{color: colorType}'）</div>
    <el-button @click="colorType = true">变为红色</el-button>
    <div :class="colorConfig">2、可以绑定一个对象</div>
    <div>3、既然可以绑定一个对象，那么也可以绑定一个计算属性</div>
    <div :class="[color1,bg1]">4、我们可以把一个数组传进去</div>
    <div :class="[is?color1:'',bg1]">5、也可以使用三目运算符</div>
    <div :class="[{color1:is},bg1]">不过这样写比较麻烦，直接传入对象比较简单</div>
    <div>6、当在一个自定义组件上使用 class property 时，这些 class 将被添加到该组件的根元素上面。这个元素上已经存在的 class 不会被覆盖。</div>
    <div :style="{color:colorStyle}">7、绑定style，css名称可以使用驼峰或者横杠链接（横杠的需要用引号括起来）</div>
    <div :style="styleConfig">8、但是通常都是直接绑定一个对象，这样比较简洁</div>
    <div :style="[styleConfig,styleConfig1]">9、v-bind:style 的数组语法可以将多个样式对象应用到同一个元素上</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        colorType: false,
        colorConfig:{
          colorRed: true,
          bg_blue: true
        },
        is:false,
        color1: "colorRed",
        bg1: "bg_blue",
        colorStyle: 'green',
        styleConfig: {
          color: "pink",
          'font-size': '24px'
        },
        styleConfig1: {
          'background-color': "blue"
        }
      }
    }
  }
</script>

<style scoped>
.colorRed{
  color: red;
}
.bg_blue{
  background-color: blue;
}
</style>
