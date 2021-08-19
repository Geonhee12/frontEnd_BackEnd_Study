// tcp 서버 
// net -> http, ftp, ssh, smtp
import net from 'net'

const port = 8070;

//웹서버와 거의 같은 패턴
const tcp_server = net.createServer((_client) => {
    //packet 처리
    /*
        8070포트로 누군가 들어오기를 기다리는데 누군가 들어오면 client소켓을 받고
        상대는 정보를 주고받을 client 소켓을 받음 
    */
   _client.on('data', (playload) =>{
       console.log(playload + "");

       _client.write("ok"); //응답
       _client.destroy();
   })

   _client.on('close', ()=>{
       console.log('closed');
   })
}).listen(port)

console.log(`server listen ${port}`);

// 결국 tcp서버만으로 http 서버로 만들 수 있다.