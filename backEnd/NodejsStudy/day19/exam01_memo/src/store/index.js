import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    memoList : [],
    bNowWriting : false
  },
  mutations: {
    updateMemoList(state, playload){
      state.memoList = playload

    }
  },
  actions: { // 비동기적 처리는 actions에서 함(비동기 처리가 다 끝나면 최종적인 데이터 수정은 mutation에서 함)
    async writeMemo(context, playload){
      console.log(playload);
      context.state.bNowWriting =true;
      let {status, data} = await axios({
        method: 'POST',
        url:'http://localhost:8080/api/v1/memo/insert',
        data: JSON.stringify(playload),
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      console.log(status);
      console.log(data);
      context.state.bNowWriting =false;
    },
    async updateMemoList(context){ // 함수 자체를 비동기함수로 선언한 것
      try{
        let {status, data} = await axios.get('http://localhost:8080/api/v1/memo/find/skip/0/limit/100')
        console.log(status);
        console.log(data);
        context.commit('updateMemoList', data.d);
      }
      catch(e){
        console.log(e);
      }
    },
    async deleteMemo(context,playload) {
      try {
        let { status, data } = await axios.get(`http://localhost:8080/api/v1/memo/delete/id/${playload}`)
        console.log(status);
        console.log(data);
        context.dispatch('updateMemoList');
        // context.commit('updateMemoList', data.d);
      }
      catch (e) {
        console.log(e);
      }
    }
  },
  modules: {
  }
})
