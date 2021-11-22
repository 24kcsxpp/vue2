<template>
  <div class="slot">
    <div>
      左側：
      <slot name="left" :changeSlotInfo="changeSlotInfo"></slot>
    </div>
    <div>
      中間：
      <slot>{{slotInfo.middleValue}}</slot>
    </div>
    <div>
      右側：
      <slot name="right" :changeSlotInfo="changeSlotInfo"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        slotInfo:{
          leftValue: "",
          middleValue: "我是默认插槽",
          rightValue: ""
        },
        changeSlotInfo:{
          leftValue: "我是更换后的左侧内容",
          middleValue: "我是更换后的中间内容",
          rightValue: "我是更换后的右侧内容"
        }
      }
    }
  }
</script>

<style scoped>
.slot{
  display: flex;
  justify-content: space-between;
}
</style>
