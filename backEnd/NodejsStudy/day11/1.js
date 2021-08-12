const http = require('http');

const http_server = http.createServer(function (req, res){
        console.log(req.url);
        res.end('hello http server!');
});

http_server.listen(8090);

console.log('start http server at 8090');

/* curl -i -X GET http://192.168.25.35:8080
        i는 헤더를 다 출력하라는 것
*/

/*
docker pull mongo 
from node 한것과 같은 과정
Run = create + start 
*/

// mongo 디비를 만들고 컬렉션을 만들고 그 안에 값을 하나씩 추가하는 것 myspl과는 다르다
// db my app - my app이라는 db를 만듦
/* 
        몽고디비는 nodejs로 만듦  repl을 사용하여서 
        
*/