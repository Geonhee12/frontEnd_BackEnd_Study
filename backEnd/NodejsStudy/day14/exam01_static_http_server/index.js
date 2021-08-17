import http from 'http'
//html 파일 표준 중에 하나로 {}있는 것은 export default같은 것이 없는 것
import {URL} from 'url'
import fs from 'fs'
// 파일 입출력을 위한 모듈과 웹서버를 위한 모듈
const port = 8080;

// 서버 생성 시 같은 디렉토리에 있는
// http:localhost:8080/home.html 이런 바뀌는 html 부분만 읽어서 서버에 
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

    try{ // 성공했을 때 data에 .html 파일의 내용이 전달된다.
        let data = fs.readFileSync(_path);
        res.writeHeader(200, header);
        res.end(data);
    }
    catch(e){ // 실패했을 때
        header['Content-Type'] = 'text/html'
        res.writeHeader(200, header);
        res.end('file not found');
    }


}).listen(port);

console.log(`listen port :${port}`);