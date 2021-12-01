import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
import Bank from "./module/Bank"
export default new Vuex.Store({
  state:{
    firstName: "张",
    lastName: "三",
    sex: "男",
    age: "18",
    job: "程序猿"
  },
  getters:{
    fullName(state){
      return state.firstName + state.lastName;
    },
    introduceSelf(state){
      return "我的工作是" + state.job;
    }
  },
  mutations:{
    ageUp(state, num){
      state.age = num?state.age += parseInt(num):++state.age;
    },
    changeSex(state){
      state.sex = state.sex === "男"?"女":"男";
    }
  },
  modules:{
    bank:Bank
  }
});
