import React from 'react';

function Exo4(props) {
    return (
        <div>
            <h1> Exo: {props.state4.exoNum} </h1>
            <p> {props.state4.text} </p>
            <input type={props.state4.inputtype } onFocus={(e) => {props.onSetState4('green')}}  onBlur ={(e) =>{props.onSetState4('transparent')}}  style={{backgroundColor:props.state4.color}}/>
        </div>
    );
}

export default Exo4;