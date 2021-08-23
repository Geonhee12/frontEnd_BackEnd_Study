import React, { useEffect, useState } from 'react';

const Exam04 = () =>{
    const [count1, count1Set] = useState(0);
    const [count2, count2Set] = useState(0);

    useEffect(()=>{
        
        console.log('update all') // 이것이 생성될 때마다 업데이트가 됨 렌더링 형식
        
        return ()=>{ // 없어질 때 업데이트
            console.log('destroy all')
        }
    });
    useEffect(()=>{
        console.log('counter 2 update');
    },[count2])
    useEffect(()=>{
        console.log('counter 1 update');
    },[count1])
    useEffect(()=>{
        console.log('counter 1 or 2 update');
    },[count1, count2])

    //진입 초기에 처리하는 것들
    useEffect(()=>{
        console.log('view created');

        return()=>{
            console.log('view destroy')
        }
    },[])


    return (
        <div>
            <h1>use Effect</h1>
            <h3 onClick={()=>{count1Set(count1+1)}}>counter1: {count1}</h3>
            <h3 onClick={()=>{count2Set(count2+1)}}>counter2: {count2}</h3>
        </div>

    )
}

export default Exam04;