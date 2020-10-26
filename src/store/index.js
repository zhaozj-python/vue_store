import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count : 20,
  },
  mutations:{
    add_count(state){
      if(state.count < 100){
        state.count += 10;
      }else{
        alert("超出范围")
      }
    }

  },
  getters:{},
})
