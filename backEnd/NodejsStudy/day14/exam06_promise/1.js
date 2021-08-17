(new Promise((resolve) =>{
    console.log('step 1');

    setTimeout(() => {
        console.log('step 2');

        resolve();
    }, 1000)
}))

.then(() => {
    console.log('step 3');
})
// 셋타임아웃을 써도(비동기함수를 썼다고 가정) 스텝 1 스텝2 스텝3로 가져가야할때
// 사용자 정보를 가져와야 사용자의 결제 정보를 요청가능할 때 그러한 정보들이 올 때까지 기다려야 하기에
// promise 객체만 한정적으로 동기식으로 적용시키는 것이다. 시스템 전체가 기다리는 것은 아니다.
// 그렇기에 효율이 떨어지지 않고 기본적인 로직을 지킴
// 

console.log('step 4')