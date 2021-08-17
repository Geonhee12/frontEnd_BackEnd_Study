import {drop, dropWhile, dropRight} from 'lodash-es'

console.log(drop(drop([1, 2, 3, 4, 5, 6])));
// 연쇄해서 가능하다
console.log(drop(drop(drop([1, 2, 3, 4, 5, 6]))));

//숫자 입력 시 숫자 개수 만큼 드롭 수행
console.log(drop(drop([1, 2, 3, 4, 5, 6], 2)));

// right는 오른쪽에서 빼는거
console.log(drop(dropRight([1, 2, 3, 4, 5, 6], 3)));

// 조건을 정해서 drop
console.log(dropWhile([1, 2, 3, 4, 5, 6], (o) =>{
    return o < 3;
}));
console.log(dropWhile([1, 2, 3, 4, 5, 6], o=>o<3));