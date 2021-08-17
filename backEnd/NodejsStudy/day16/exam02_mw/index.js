import express from 'express'
import dotenv from 'dotenv'
import {logger, autholize,testmw_1, testmw_2} from './mw.js' // 미들웨어 외부로 처리
import morgan from 'morgan'
dotenv.config()


const app = express()
// app.use(logger);
// app.use(autholize); // 전역 스코프
app.use([logger,autholize]) // 배열로 다수를 넘기는 것도 가능하다.
app.use('/home', [testmw_1,morgan(':remote-addr')]); //home 스코프
app.use('/about', testmw_2); // about 스코프

//미들웨어를 통해 효율적으로 처리
app.use((req, res, next) =>{
    console.log(req.method,
        req.url,
        (new Date()).toISOString());
    next();
})

app.use((req, res, next) =>{
    if(req.query.apikey == 'qwer'){
        next()
    }
    else{
        res.send('<h1>인증이 필요합니다</h1>');
    }
})

app.get('/home', (req, res)=>{
    console.log(req.method,
        req.url,
        (new Date()).toISOString());
    res.send('<h1>home</h1>')
})  
app.get('/home/welcome',(req,res) =>{
    res.send('<h1>welcome to home</h1>')
})
app.get('/about', (req, res)=>{
    console.log(req.method,
        req.url,
        (new Date()).toISOString());
    res.send('<h1>about</h1>')
})

//use 쓰지않고 직접 미들웨어 등록하기
app.get('/blog',
    (req, res, next) => { //미들웨어 임베딩
        console.log('blog middle ware');
        next();
    },
    (req, res) => { // 콜백
        res.send('<h1> blog </h1>')
    })
app.listen(process.env.PORT, () =>{
    console.log(`server start at: ${process.env.PORT}`)
})
