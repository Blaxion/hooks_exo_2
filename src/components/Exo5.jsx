import React from 'react';

function Exo5(props) {
    let state5 ={
        exoNum: 5,
        inputtype: "button",
    } 
    return (
        <div>
            <h1> Exo: {state5.exoNum} </h1>
            <input type={state5.inputtype} onClick={()=>alert('clicked')} value='hit me '/>
        </div>
    );
}

export default Exo5;