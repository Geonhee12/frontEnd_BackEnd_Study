import _ from 'lodash'

//js는 펑션 내부에 객체가 있다. 
// 함수도 자기 자신의 this를 가지고 있음(모든 함수 공통)
function greet()
{
    return 'hello ' + this.user;
}

let obj_a = {
    user:'predi', age:21
}
let obj_b = {
    user:'json', age:28
}

let greet_a = _.bind(greet, obj_a);
let greet_b = _.bind(greet, obj_b);
console.log(greet_a());
console.log(greet_b());