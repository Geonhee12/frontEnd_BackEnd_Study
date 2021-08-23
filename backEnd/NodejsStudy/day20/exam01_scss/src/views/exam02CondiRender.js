import React, {useState} from 'react';

const Exam02 = ()=>{
    const [renderState, renderStateSet] = useState("main");
    const [age, ageSet] = useState(11);
    const [bshow, bshowSet] = useState(true);

    if(renderState === "main"){
        return (
            <div>
                <h1>조건부 렌더링 main</h1>
                <button className="myui btn" onClick={()=>{
                    renderStateSet("etc")
                }}>to etc</button> 
                <div>
                    <input onChange={(evt)=>{
                        if(evt.target.value !=='')
                            ageSet(parseInt(evt.target.value))
                        else
                            ageSet(parseInt(0))
                    }} />

                    <h2>
                        {
                            age >= 15?
                                age > 20 ?
                                    "성인" :
                                    "청소년"
                            :
                            "어린이"
                        }
                    </h2>
                    <h2>
                    {
                        bshow &&
                        <div>
                            <h3>모달참</h3>
                            <button className="myui btn modal" onClick={()=>{bshowSet(false)}}>close</button>
                        </div>
                    }    
                    </h2>
                </div>

            </div>

        )
    }
    else{
        return(
            <h1>조건부 렌더링 (etc)</h1>
        )
    }

}

export default Exam02