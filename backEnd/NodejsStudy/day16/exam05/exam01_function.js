var bar = 10

function foo(){
    var bar = 0 //클로저 변수
    
    return function(){
        bar++;
        console.log(bar);
    }
}
let _bar_clouser = foo() // 클로저 함수
console.log(bar);
_bar_clouser();
_bar_clouser();