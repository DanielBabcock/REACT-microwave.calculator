import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    pwr: 0,
    cookTimeMin: 0,
    cookTimeSec: 0,
    answer: 0, 
    calc: 0,
    answerAreaA: "",
    answerAreaB: ""
  }

  handleFieldChange = function (evt)  {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
    console.log(stateToChange)
  }.bind(this)

  yourTime = function (evt) {

    let minutesToMilliseconds = this.state.cookTimeMin * 60000;

    let secondsToMilliseconds = this.state.cookTimeSec * 1000;

    let totalMilliseconds = minutesToMilliseconds + secondsToMilliseconds;

    let powerAdjustedMilliseconds = (700 / this.state.pwr) * totalMilliseconds;

    let newMinutes = Math.floor(powerAdjustedMilliseconds / 60000);
    
    let newSeconds = ((powerAdjustedMilliseconds % 60000) / 1000).toFixed(0);

        this.setState({
          answerAreaA: newMinutes,
          answerAreaB: newSeconds
        })
        
    }.bind(this)


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the saviour of College kids, the microwave calculator.</h1>
        </header>
        
        <div>
            <p>Your Microwave's Power Level</p>
                <input onChange={this.handleFieldChange} type="number" id="pwr" placeholder="1100"></input>
            <br/>

            <p>Enter listed cook time on packaging.</p>

            <p>Minutes:</p>
                {/* <!-- <textarea id="cookTimeM" placeholder="5"></textarea> --> */}
                <input onChange={this.handleFieldChange} type="number" id="cookTimeMin" placeholder="5" ></input>
            <p>Seconds:</p>
                {/* <!-- <textarea id="cookTimeS" placeholder="45"></textarea> --> */}
                <input onChange={this.handleFieldChange} type="number" id="cookTimeSec" placeholder="45" ></input>

            <br/>
            <button onClick={this.yourTime} type="button" id="calculate">Calculate New Time</button><br/>

            <br/>
            <p>Adjusted Time:</p>
            <div>Time: {this.state.answerAreaA}:{this.state.answerAreaB}</div>
            {/* <!-- <button id="answerAreaA" class="equals" data-result="">=</button> --> */}
            <br/>
            <br/>
        </div>
      </div>
    );
  }
}

export default App;

// Old vanilla JS version below::::

// **********************
// *    Get elements:      *
// **********************
// let pwr = document.getElementById("power");
// let cookTimeMin = document.getElementById("cookTimeM");
// let cookTimeSec = document.getElementById("cookTimeS");
// let answer = document.getElementById("answerArea");
// let calc = document.getElementById("calculate");



// **********************
// *    Add listeners:      *
// **********************
// calc.addEventListener("click", function(){
//     yourTime();
// });

// **********************
// *    Declare funtions:      *
// **********************

// function yourTime() {

//     let minutesToMilliseconds = cookTimeMin.value * 60000;
//         // console.log("minutesToMilliseconds :", minutesToMilliseconds);

//     let secondsToMilliseconds = cookTimeSec.value * 1000;
//         // console.log("secondsToMilliseconds:", secondsToMilliseconds);

//     let totalMilliseconds = minutesToMilliseconds + secondsToMilliseconds;
//         // console.log("totalMilliseconds :", totalMilliseconds);

//     let powerAdjustedMilliseconds = (700 / pwr.value) * totalMilliseconds;
//         // console.log("powerAdjustedMilliseconds: ", powerAdjustedMilliseconds);

//     let newMinutes = Math.floor(powerAdjustedMilliseconds / 60000);
//         // console.log("newMinutes :", newMinutes);
    
//     let newSeconds = ((powerAdjustedMilliseconds % 60000) / 1000).toFixed(0);
//         // console.log("newSeconds :", newSeconds);

//         answerAreaA.innerHTML = newMinutes;
//         answerAreaB.innerHTML = newSeconds;
        
//     return newMinutes + ":" + (newSeconds < 10 ? '0' : '') + newSeconds;
//     };

