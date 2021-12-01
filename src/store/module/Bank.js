export default {
  // namespaced: true,
  state: {
    bankName: "日照银行",
    bankAddress: "银荷大厦B座",
    bankVisit: "1"
  },
  getters:{
    getBankAddress(state){
      return "济南市高新区舜华西路" + state.bankAddress;
    },
    getParentInfo(state,getter,rootState){
      return state.bankName + rootState.job;
    }
  },
  mutations:{
    updataBankVisit(state){
      state.bankVisit++;
    }
  }
}
