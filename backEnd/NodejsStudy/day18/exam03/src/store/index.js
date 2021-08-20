import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state:{
    todos: []
  },
  mutations: {
    updateTodos(state, playload){
      state.todos = playload
    }
  },
  actions: {
    updateTodos(context){
      (async () =>{
        try {
          let url = 'https://jsonplaceholder.typicode.com/todos';
          let {status, data} = await axios.get(url);
          context.commit('updateTodos', data);
         //  state.todos = data
        }
        catch (e){
          console.log(e);
        }

      })();
    }
  },
  modules: {
  }
})
