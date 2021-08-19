import { createStore } from 'vuex' 

export default createStore({ // 전역변수를 관리해줌
  state() { // 데이터를 만드는 곳, 리액트의 state와 비슷하다.
    let _counter  = 10;
    if(localStorage.getItem('counter') !== null)
    {
        _counter = parseInt(localStorage.getItem('counter'));
    }
    else{
      localStorage.setItem('counter', _counter); //초기값 등록
    }
    return {
      counter : _counter
    }
  },
  mutations: {
    increase(state){
      state.counter++
      localStorage.setItem('counter', state.counter);
    }
  },
  actions: {
  },
  modules: {
  }
})
