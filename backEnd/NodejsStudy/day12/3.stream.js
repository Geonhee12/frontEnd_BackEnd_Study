// 파일에서 읽어서 콘솔로 출력
import fs from 'fs' // 파일시스템을 가져오는 것
const src = fs.createReadStream('out.txt');
const dest = process.stdout;
src.pipe(dest);