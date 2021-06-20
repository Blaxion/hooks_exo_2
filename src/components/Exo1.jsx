import React from 'react';

function Exo1(props) {

    return (
        <div>
            <h1> Exo: {props.state1.exoNum} </h1>
            <p> Vous avez cliqué {props.state1.incrementNum} fois </p>
            <input type={props.state1.inputtype} onClick={props.onSetState1} value="+1" />
        </div>
    );
}

export default Exo1;