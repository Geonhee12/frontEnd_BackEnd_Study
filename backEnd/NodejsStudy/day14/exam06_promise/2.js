
console.log('step1');
/*
setTimeout(() => { // 가장 나중에
    console.log('step2');
    setTimeout(() => {
        console.log('step3');
        setTimeout(() =>{
            console.log('step4');
        }, 1000)

    }, 1000)
}, 3000)
*/


//waterfall 
(new Promise((resolve) => {
    console.log('step 2');
    setTimeout(() =>{
        resolve();

    }, 3000)
})).then(() =>{
    return new Promise((resolve) =>{
    console.log('step 3');
    setTimeout(() =>{
        resolve();

    }, 500)
    })
}).then(() =>{
    return new Promise((resolve) =>{
    console.log('step 4');
    setTimeout(() =>{
        resolve();

    }, 500)
    })
})