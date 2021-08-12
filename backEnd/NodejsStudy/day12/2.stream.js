import fs from 'fs' // 파일시스템을 가져오는 것
const dest = fs.createWriteStream('out.txt');
const src = process.stdin;
src.pipe(dest);