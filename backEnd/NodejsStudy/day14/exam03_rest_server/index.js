/*
import http from 'http'
import {URL} from 'url'
const port = 8090

http.createServer((req, res) =>{

    const urlObj = new URL(
        req.url,
        'http://exam.com'
    );

    let result = {
        r: 'ok'
    };
// 제이슨 객체 자체를 보낼 수 없어서 바이너리객체이므로 그래서 스트링으로 만들어서 보냄
// 요청한 쪽에서 이걸 받아서 다시 파싱하여 사용
    res.end(JSON.stringify(result));
    let header ={
        'Content-Type' : 'text/plain',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET',
        'Access-Control-Max-Age' : '1000',
        "Access-Control-Allow-Headers" : "*"// cors정책 허용 
    }
    let _title = urlObj.searchParams.get('title');
    let _msg = urlObj.searchParams.get('msg');

    result._title = _title;
    result._msg = _msg;
    res.writeHead(header);
    res.end(JSON.stringify(result));
}).listen(port);

console.log(`listen : ${port}`);

*/
import http from 'http'
import { url } from 'inspector';
import {URL} from 'url'

const port = 8090

http.createServer((req,res)=> {

    const urlObj = new URL(
        req.url,
        'http://example.com'
    );

    console.log(`pathname : ${urlObj.pathname}`);
    console.log(`search : ${urlObj.search}`);
    console.log(`hostname : ${urlObj.hostname}`);

    let result = {
        r: 'ok'
    }
    let header = {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '1000',
        "Access-Control-Allow-Headers": "*" //CORS 정책 허용  * 는 모두 허용 
    }
    res.writeHead(200,header);
// 파싱


    if(urlObj.pathname === '/echo'){ // 에코 요청 처리
        let _title = urlObj.searchParams.get('title');
        let _msg = urlObj.searchParams.get('msg');

        result.title = _title
        result.msg = _msg

    }
    else if(urlObj.pathname === '/sum'){
        // 다 문자열로 들어오니까 숫자로 처리하기 위함
        let a = parseInt(urlObj.searchParams.get('a'));
        let b = parseInt(urlObj.searchParams.get('b'));
        
        result.cal = a + b;

    }
// api가 많을 경우 switch case 사용
    res.end(JSON.stringify(result));

}).listen(port);

console.log(`listen : ${port}`);