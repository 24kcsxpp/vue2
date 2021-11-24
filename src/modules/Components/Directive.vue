<template>
  <div>
    <h3>1、简介</h3>
    <div>除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令。</div>
    <button v-click>点击我</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {};
    },
    directives: {
      click: {
        bind(){
          alert("渲染完成我就会展示出来")
        }
      }
    }
  }
</script>

<style scoped>

</style>
