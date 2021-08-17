import _ from 'lodash'


function foo(a, b) {
    this.a = a;
    this.b = b;
}

foo.prototype.c = 1;
foo.prototype.bar = function(){
    console.log(this.a);
};
// foo가 생성자처럼 동작을 하는 것이다 그래서 fooObj이 객체가 된다.
// 프로토타입 자체가 함수이기에 실행 중간에 수정할 수 있다.
let fooObj = new foo(1, 2);
console.log(fooObj);
let fooObj2 = new foo(3, 4);
console.log(fooObj2);
_.forIn(fooObj, (o,key)=>{
    console.log(o,key);
})
_.forIn(fooObj2, (o,key)=>{
    console.log(o,key);
})
let obj = {a:1, b:2};
_.forIn(obj, (o,key)=>{
    console.log(o,key);
})
// foo_a = _.bind(foo, obj);
fooObj.bar();
fooObj2.bar();