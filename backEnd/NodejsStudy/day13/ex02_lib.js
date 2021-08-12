function 중요한함수1(){
    console.log("hello");
}
function 중요한함수2(){
    console.log("es6");
}
var dataa = 7;
//데이터도 가능하다.
function foo(){
    return {
        data : dataa,
        foo1 : 중요한함수1,
        foo2 : 중요한함수2
    }
}
// 위의 함수들을 간접적으로 호출하는 법: 함수를 가르치는 오브젝트를 넘겨준다
// 리액트나 뷰에서 요구하는 방식이고 필요한 함수를 만들고 싹 다 return으로 넘긴다
// 객체를 함수로 보는 것이다. 클래스 대신 함수로 
export default foo;