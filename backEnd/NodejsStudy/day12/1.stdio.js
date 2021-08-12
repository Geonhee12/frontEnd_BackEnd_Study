import fs from 'fs'
process.stdin.resume() //keyboard
process.stdin.setEncoding('utf-8')


process.stdin.on('data', function(text){
    console.log(`echo : ${text}`);
    console.log(`echo : ` + text);

    //숨겨진 개행 문자를 날려야함 (\n), ==보다 ===이 정확하므로 === 사용 추천
    if(text === 'exit\n'){
        
        process.exit()
    }

})