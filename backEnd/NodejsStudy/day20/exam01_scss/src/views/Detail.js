import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () =>{
    const {id} = useParams()
    return (
        <div className="Detail">
            <h1>Detail</h1>
            <button className="myui btn" style={
                {backgroundColor:id}
            }>{id}</button>
        </div>
    )
}

export default Detail;