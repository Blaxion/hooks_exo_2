import React from 'react';

function Exo3(props) {
    let state3 ={
        exoNum: 3,
        text :"On copy",
        inputtype: "text",
    } 
    return (
        <div>
            <h1> Exo: {state3.exoNum} </h1>
            <p> {state3.text} </p>
            <input type={state3.inputtype} onCopy={(e) => {alert(e.target.value)}}/>
        </div>
    );
}

export default Exo3;