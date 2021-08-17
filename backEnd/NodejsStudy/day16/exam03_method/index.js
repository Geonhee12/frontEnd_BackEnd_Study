import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

//미들웨어
const rawBody = (req, res, next) =>{
    if(req.method == 'POST')
    {
        req.body = ''
        req.setEncoding('utf-8')
        req.on('data', (playload) => {
            // console.log(playload)
            req.body += playload
            
        })
        req.on('end',() =>{
            // 바디 파싱
            /*
            let _bodyToken = req.body.split('=')
            req.body = {}
            req.body[_bodyToken[0]] = _bodyToken[1];
            // console.log(req.body)
            */
            next();
        })
    }
    else{
        next();
    }


}
app.use(express.static('../www'))
// app.use('/api/v1', []);

//method 
app.post('/api/v1/hello', rawBody, (req, res) =>{
    
    res.json({r:'ok', body:req.body})

})

//parser 미들웨어를 적용
app.post('/api/v1/addUser', express.urlencoded({extended:false}), (req, res) =>{
    
    res.json({r:'ok', name :req.body.name, age: parseInt(req.body.age)});
})

app.post('/api/v2/addUser', express.json(),(req, res) =>{
    res.json({r:'ok', name: req.body.name, age:parseInt(req.body.age)})
})

app.listen(process.env.PORT, () =>{
    if(process.env.NODE_ENV == 'dev'){
        console.log(`server start at: ${process.env.PORT}`);
    }
})