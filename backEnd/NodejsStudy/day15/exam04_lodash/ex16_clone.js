import _ from 'lodash'

var objects = [{'a' : 1}, {'b' : 2}];
let _objects = objects;
let objects2 = _.clone(objects);

console.log("-----clone-----");
console.log(objects === _objects);
console.log(objects === objects2);
console.log(objects[0] === objects2[0]);
// 객체 자체는 새로 만든 것이지만 그 안의 데이터들은 참조한 것이다.
// 소팅한 것 안한 것 이런식으로 나누기 위해서 사용한다. 


console.log("-----Deep clone-----");
let objects3 = _.cloneDeep(objects);

console.log(objects3 === objects);
console.log(objects3[0] === objects[0]);