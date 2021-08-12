import net from 'net'

const host = '192.168.25.35';
const port = 8070;
// 클라이언트는 손님 서버는 가게주인  같은 개념이다.
/*
    직접 소켓을 생성
    헤 당 소켓을 사용하여 접속
 */
const socket = new net.Socket();

//접속시도
socket.connect(port, host, () => {
    //접속 성공하면 해야될 일 하기
    socket.write('hello\r\n', 'utf-8', () =>{
        //send ok
        console.log('send message');
    })
});

socket.on('data', (playload) =>{
    console.log('recv from server' + playload);
})
socket.on('close', () =>{
    console.log('close');
})

// docker exec -it 0254e5e41460 ls 
//bash 는 명령어를 계속 주고받을 수 있게 해준느 툴 일뿐 -it속성 덕에 나한테 보이게 됨
// -w 생략되면 기본적으로 워킹디렉토리가 루트임

// docker exec -it -w /home/work/nodeJsStudy  0254e5e41460 ls
// 한 터미널에서 하려면 -it 지우고 -d로 데몬으로 백그라운드에서 돌려서 테스트
// -w 옵션은 워킹 폴더를 지정하는 것
// 컨테이너가 중지되면 자동으로 종료됨 
