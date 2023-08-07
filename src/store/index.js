import { createStore } from 'vuex'

export default createStore({
  state: {
    myData: [
      {
        Title: 'pehla title',
        Disc: 'Pehli discription'
      }
    ]
  },
  mutations: {
    SET_DATA(state,payload){
      state.myData = payload;
    }
  },
  actions: {
    addData({ commit, state }, obj){
      var newArr = [];
      newArr = state.myData;
      newArr.push(obj)


      commit('SET_DATA', newArr);
    }
    
  },
  getters: {
    showData(state){
      return state.myData;
    }
  },
  modules: {
  }
})
