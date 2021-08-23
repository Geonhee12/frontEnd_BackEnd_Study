import React, { useState } from 'react';

const Home = ()=>{ // function 안쓰고 애로우 함수로 쓰심
    let red_btn = {
        backgroundColor: 'rgb(255,0,0)'
    }

    let [btn_color, btn_colorSet] = useState('blue')

    function changeColor() {
        console.log(btn_color)
        // btn_color = 'pink'
        btn_colorSet('pink')
    }

    return (
        <div>
            <h1> Home </h1>
            <div>
                <button className="myui btn" >Normal</button>
                <button className="myui btn" style={red_btn}  >Cancel</button>
                <button className="myui btn" style={{
                    backgroundColor: btn_color,
                    padding: "32px 32px"
                }} onClick={changeColor} > Info </button>
            </div>
        </div>

    )

}

export default Home;