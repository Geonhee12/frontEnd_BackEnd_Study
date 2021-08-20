// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  


  return (
    <div className="App">
        <MyModal />
    </div>
  );
}
function MyModal(){
  let [bShowModal, bShowModal_set] = useState(true)
  return (
    <div>
      {
        bShowModal ? // boolean ?   
        <div className="box">
        <h1>modal dlg</h1>
        <button onClick={() => { bShowModal_set(false) }}>[x]</button>
      </div> :null
      }


    </div>
    
  )
}
export default App;
