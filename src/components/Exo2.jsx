import React from 'react';

function Exo2(props) {
    let maSoupe = (e)=>{
        e.preventDefault();
        console.log(e);
        props.onSetState2(e.target.children[0].value)
    }
    return (
        <div>
            <h1> Exo: {props.state2.exoNum} </h1>
            <p> {props.state2.text} </p>
            <form onSubmit={(e) => {maSoupe(e)}}>
                <input type={props.state2.inputtype} />
            </form>
            
        </div>
    );
}

export default Exo2;