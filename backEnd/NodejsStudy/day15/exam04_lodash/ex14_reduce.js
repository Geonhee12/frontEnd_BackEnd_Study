import _ from 'lodash'

const _input = [1,2, 3,4];

// acc에 더하면서 배열을 하나씩 줄여간다
// reduce로 map, foreach 등을 만들 수 있다
let _output = _.reduce(_input, (acc, o) =>{
    console.log(o);
    acc += o;
    return acc;
},0)

// map처럼
_output = _.reduce(_input, (acc, o) =>{
   // console.log(o);
    if(o%2){
        acc.push(o);
    }
    acc.push(o);
    return acc;
},[])

// 홀수만 추려내기
_output = _.reduce(_input, (acc, o) =>{
    // console.log(o);
    if(o%2){ //짝수가 아니면 추가
        acc.push(o);
    }
    return acc;
},[])
console.log(_output);