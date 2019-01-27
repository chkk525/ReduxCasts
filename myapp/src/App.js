import React  from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () =>  {

    // const buttonText = ["click", "1me"];
    const buttonText = {text:"click me"};
    const buttonStyle = {background: "blue", color: "white"};
    const labelText = "Enter Name";

    return (
        <div>
            <label className={"label"} htmlFor="input1">{labelText}></label>
            <input type="text" id={"input1"}/>
            <button style={buttonStyle}>{buttonText.text}</button>
        </div>
    );
}

export default App;/**/
