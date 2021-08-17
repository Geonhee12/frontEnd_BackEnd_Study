import axios from "axios";

// 콜백이 없고 내부적으로는 비동기적이라 퍼포먼스에 문제도 없다.
// waterfall이 비효율적인 경우를 해결하는 법
(async function(){
try{
    let res =await axios({
        method: 'POST',
        url : 'http://localhost:8090/echo?title=hello&msg=nodejs',
        data : 'hello axios', 
        headers : {
            'myheader' : 'hi'
        }
    })
    console.log(res.status);
    console.log(res.data);
}
catch(e) {
    console.log(e.code);
}
})();
