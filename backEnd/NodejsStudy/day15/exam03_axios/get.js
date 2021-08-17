import axios from "axios";

// fetch는 then이 2번 걸치지만 axios는 한번만에 온다
axios.get('http://localhost:8090/echo?title=hello&msg=nodejs')
.then((res) =>{
    console.log(res.status);
    console.log(res.data);
})
.catch((err) =>{
    console.log(err);
})