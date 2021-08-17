import express from 'express'
import dotenv from 'dotenv'
// const express = require('express')

dotenv.config()

const app = express() // express는 싱글턴 객체다. 인스턴스가 딱 하나만 존재한다.
const port = process.env.PORT || 3000
// port가 설정되어 있으면 해당 포트번호로 하고 아니라면 3000 포트로 한다.
console.log(process.env.NODE_ENV); // cross-env로 넘어감
console.log(process.env.MONGODB_URL); // dotenv
console.log(process.env.MONGODB_PORT);
//설정을 꾸밀때 cross-env, dotenv를 사용(가장 트렌디한 방법)

app.use(express.static('./www')) //정적 웹서비스 미들웨어 등록
app.use('/text', express.static('./text')) // 텍스트로 구분된 것은 텍스트폴더로 가서 찾는다. 즉 텍스트 파일에 대한 미들웨어 등록

// url 네이밍을 좀 더 구분하기 좋게 하기
app.get('/hello', (req, res) => {

  res.json({r:'ok', info: 'hello backend'});
  /*
  res
  .set('Content-Type', 'text/plain')
  .status(200)
  .send('<h1>Help</h1>');
  */
})

app.get('/help', (req, res) =>{
  res.set('Content-Type', 'text/plain');
  res.status(200);
  res.send('<h1>Help</h1>');
})
app.get('/api/v1/addUser/name/:name/age/:age', (req, res) =>{
  res.json({r:'ok', 
  type :'parameter',
  name:req.params.name, 
  age: parseInt(req.params.age)})
})

app.get('/api/v1/addUser', (req,res) =>{
  res.json({
    r:'ok',
    name: req.query.name,
    age : req.query.age
  })
})
app.all('*', (req, res) =>{ //기타 디폴트 처리를 하기 위한 것이므로 맨 마지막으로 와야함(예외 처리, 오류)
  res // method 체이닝이 가능
  .status(404)
  .send(`page not found ${req.url}`);
})

app.listen(port, () => {
    if (process.env.NODE_ENV === 'dev') {
        console.log(`Example app listening at http://localhost:${port}`);
    }

})