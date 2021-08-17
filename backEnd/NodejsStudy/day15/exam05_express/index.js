import express from 'express'

const app = express();

const server_port = 8080
app.use(express.static('www'));


// 요청 처리
app.get('/hello', (req, res) =>{
    res.send('hi express');
});
app.listen(server_port);

