import React, { useState } from 'react';
import axios from 'axios';


const Exam03 = () =>{

    const [todos,todosSet] = useState([]);
    const [post, postSet] = useState({});
    return (
        <div>
          <h1>Axios</h1>
          <button className="myui btn" onClick={
              async ()=>{
                  try{
                    const {status, data} = await axios.get('https://jsonplaceholder.typicode.com/todos');

                    todosSet(data)
                  }
                  catch(e){
                      console.log(e);
                  }
              }
          }>Get</button>
          <button className="myui btn" onClick={
              async ()=>{
                  try{
                    let {status, data} = await axios({
                        method: 'POST',
                        url:'https://jsonplaceholder.typicode.com/posts',
                        data: JSON.stringify({
                            title: 'foo',
                            body: 'bar',
                            userId: 1,
                          }),
                          headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                          }
                        
                    });
                    console.log(status);
                    console.log(data);
                    postSet(data);
                  }
                  catch(e)
                  {
                      console.log(e);
                  }
              }
          }>Post</button>
          <div className="todolist">
                <ul style={
                    {
                        height : "300px",
                        overflow : 'auto'
                    }
                }>
                    {
                        todos.map((todo, index) => {
                            return (
                                <li key={index}>{todo.title}</li> // 키값을 꼭 정해주어야 한다.
                            )
                        })
                    }
                </ul>
                
          </div>
          <div>
              <div className="todoItem">
                  <h1>{post.title}</h1>
                  <h3>{post.body}</h3>
              </div>
          </div>
        </div>

    )
}

export default Exam03;