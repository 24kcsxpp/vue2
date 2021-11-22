<template>
    <div>
        <div class="title">
            <img src="../assets/left.png" alt="" class="go-back" @click="goBack">
            <div>{{titleName}}</div>
            <div @click="changeTime">更新时间</div>
        </div>
    </div>
</template>

<script>
    export default {
      name: "HeaderTitle",
      data(){
        return {

        }
      },
      props:{
        titleName:{
          type: String,
          default: ""
        }
      },
      methods:{
        goBack(){
          this.$router.back();
        },
        changeTime(){
          this.$emit("updataTime",new Date());
        }
      }
    }
</script>

<style scoped>
.title{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title .go-back{
  width: 14px;
  height: 14px;
}
</style>
