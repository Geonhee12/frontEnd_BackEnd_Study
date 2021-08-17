// import _ from 'lodash'
import findIndex from 'lodash' 
//필요한 것만 사용하기 위해 이런식으로 가져와서 사용
console.log(_.VERSION)

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
 let _findIndex =  _.findIndex(users, (o)=>{
    return o.user == 'fredx'
  });

  console.log(_findIndex);
  // 못 찾으면 -1 찾으면 해당 인덱스를 뱉도록 
