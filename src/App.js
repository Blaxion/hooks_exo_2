import React, {
  useState
} from "react";
import Exo1 from './components/Exo1.jsx'
import Exo2 from './components/Exo2.jsx'
import Exo3 from './components/Exo3.jsx'
import Exo4 from './components/Exo4.jsx'
import Exo5 from './components/Exo5.jsx'

function App() {
  let stateExo1 = {
    exoNum: 1,
    incrementNum: 0,
    inputtype: "button",
  }
  let [state1, setState1] = useState(stateExo1);
  let setState1Parent = () => {
    setState1({
      exoNum: 1,
      incrementNum: state1.incrementNum + 1,
      inputtype: "button",
    })
  }

  let stateExo2 = {
    exoNum: 2,
    text: "Votre texte",
    inputtype: "text",
  }
  let [state2, setState2] = useState(stateExo2);
  let setState2Parent = (value) => {
    setState2({
      exoNum: 1,
      text: value,
      inputtype: "text",
    })
  }


  let stateExo4 = {
    exoNum: 4,
    color: 'transparent',
    inputtype: "text",
  }
  let [state4, setState4] = useState(stateExo4);
  let setState4Parent = (value) => {
    setState4({
      exoNum: 4,
      color: value,
      inputtype: "text",
    })
  }






  return ( 
    <div className = "App"style = {{textAlign:'center'}} >
    <Exo1 state1 = {state1}onSetState1 = {setState1Parent}/> 
    <Exo2 state2 = {state2}onSetState2 = {setState2Parent}/> 
    <Exo3/> 
    <Exo4 state4 = {state4}  onSetState4 = {setState4Parent} />
    <Exo5/>
    </div>
  );
}

export default App;