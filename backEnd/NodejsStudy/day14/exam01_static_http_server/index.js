import http from 'http'
//html 파일 표준 중에 하나로 {}있는 것은 export default같은 것이 없는 것
import {URL} from 'url'
import fs from 'fs'

const port = 8080;

//http:localhost:8080/home.html 이런 바뀌는 html 부분만 읽어서 서버에 
// 해당 파일이 있으면 보내주고 없으면 없다고 한다.
http.createServer((req, res) =>{

    console.log(req.url); //url을 넣어준다.
    console.log(req.method); // get, post를 구분
    const urlObj = new URL(
        req.url,
        "http://exam.com"

    )
    console.log(urlObj.pathname);
    let header = {
        'Content-Type' : 'text/html'
    }
    let _path = './www' + urlObj.pathname;
    console.log(_path);

    try{
        let data = fs.readFileSync(_path);
        res.writeHeader(200, header);
        res.end(data);
    }
    catch(e){
        header['Content-Type'] = 'text/plain'
        res.writeHeader(200, header);
        res.end('file not found');
    }


}).listen(port);

console.log(`listen port :${port}`);