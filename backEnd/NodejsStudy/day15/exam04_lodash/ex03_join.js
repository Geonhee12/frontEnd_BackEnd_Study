import _ from 'lodash'
// 배열로 받은 아이피 주소같은걸 변환할 때 좋음
let ip = _.join([163,168,4,192], '.');

console.log(ip);
// 반대로 주소를 배열로 저장하여 데이터베이스에 저장할 때
let _data = _.split(ip, '.');

console.log(_data);