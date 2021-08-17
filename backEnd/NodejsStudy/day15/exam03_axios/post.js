import axios from "axios";

axios({
    method: 'POST',
    url : 'http://localhost:8090/echo?title=hello&msg=nodejs',
    data : 'hello axios', 
    headers : {
        'myheader' : 'hi'
    }
}).then((res) =>{
    console.log(res.status);
    console.log(res.data);
}).catch((err) =>{
    console.log(err.code); // 무슨 에러인지 확인 가능
})