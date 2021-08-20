// import logo from './logo.svg';
import './App.css';
import {useState}from 'react'
function App() {


  // let msg = 'hello react';
  let [msg,setMsg] = useState('hello ract world') //리액티브 변수인 msg를 만들어라 
  // useState 쓰면 데이터가 바뀌면 View가 바뀐다. 
  // [변수, 함수]
  // eslint-disable-next-line
  let [counter, setCounter] = useState(0)
  function changeMsg(_newMsg){
    setMsg(_newMsg)

    console.log(`chagne message : ${_newMsg}`);
  }
  function increase(){
    setCounter(counter+1);
  }
  function reset(){
    setCounter(0)
  }
  return (
    <div className="App">
      <h1>{msg}</h1>
      <button onClick={()=>{changeMsg('hi')}}> change message </button> 
      <button onClick={()=>{changeMsg('bye')}}> change message </button> 
      <div>
      <h1>The Counter</h1>
      <h3>{counter}</h3>
      <button onClick={increase}>inc</button>
      <button onClick={reset}>reset</button>
      </div>
    </div>

  );
}

export default App;
// 18번째줄 함수를 선언하기 위해서는 ()=> 사용해야함 안그러면 재귀호출이 일어남
// 트리에서 최상위는 무조건 하나이다 항상 div하나에 감싸면 그 안에 다 들어가야 한다.
