import fs from 'fs'
//입출력이 다 끝나고 로그가 찍힘 
// 보기엔 동기식이 좋지만 시스템 효율엔 비동기가 좋음
fs.writeFileSync('text2.txt',
    'hello',
    {
        encoding: 'utf-8'
    }
);

console.log('done');