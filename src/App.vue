<template>
  <div id="app">
    <header-title :titleName="$route.meta.title" @updataTime="updataTime"></header-title>
    <div>时间为：{{time}}</div>
    <router-view/>
  </div>
</template>

<script>
import HeaderTitle from './components/Title';
export default {
  name: 'App',
  data(){
    return {
      time: ""
    };
  },
  components:{
    "header-title":HeaderTitle
  },
  methods:{
    updataTime(time){
      this.time = time;
    }
  },
  computed:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
