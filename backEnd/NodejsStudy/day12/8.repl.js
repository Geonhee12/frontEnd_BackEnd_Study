
// relp객체는 큰 규모의 프로젝트를 실행하기 위해서 사용한다.

import repl from 'repl';
let repl_context = repl.start({
    /*  
        node를 실행하면 나오는 인터프리터이다.
        함수의 타이밍을 잡아 디버깅을 해야하는 상황일 때 필요하다.
        디버깅을 할 때 중요 프롬프트를 실행 한 뒤, foo()로 함수를 실행시킨다.
    */
    prompt: '>', 
    input: process.stdin,
    output: process.stdout,

    

}).context;

// 타이밍이 아주 중요한 함수
function foo(){
    console.log('hello world');
}
repl_context.foo = foo;