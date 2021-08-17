import http from 'http'
import {URL} from 'url'
//require와 import 둘다 쓸 때는 .mjs쓰면 됨
const port = 8090

http.createServer((req,res)=> {
    console.log(req.headers);
    let _myCustomHeader = req.headers['myheader'];
    console.log(_myCustomHeader);

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
    let header = { // 받는 헤더가 아니라 보내는 헤더
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '1000',
        "Access-Control-Allow-Headers": "*" //CORS 정책 허용  * 는 모두 허용 
    }
    res.writeHead(200,header);

    let method = req.method; // GET, POST인지 구분
// 파싱
// api가 많을 경우 switch case 사용
    if(method === 'GET'){
        if(urlObj.pathname === '/echo'){ // 에코 요청 처리
            let _title = urlObj.searchParams.get('title');
            let _msg = urlObj.searchParams.get('msg');
    
            result.title = _title
            result.msg = _msg
    
        }
        res.end(JSON.stringify(result));
    }
    else if(method === 'POST'){
        //포스트 처리
        //playlod는 버퍼 데이터이다.
        if(urlObj.pathname === '/echo'){ // 에코 요청 처리
            let body_data = '';
            req.on('data', (playlod) =>{ // 요청측 데이터를 받는 부분, 데이터가 한번에 오지 않을 수 있다.
                body_data +=playlod;
            })
            req.on('end', ()=> {
                result.data= body_data;
                result.myheader = _myCustomHeader;
                res.end(JSON.stringify(result));
            })
    
        }

    }



}).listen(port);

console.log(`listen : ${port}`);