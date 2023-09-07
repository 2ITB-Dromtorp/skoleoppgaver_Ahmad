import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
render() {
return (
<div className="App">
<div className="clock">
</div>
</div>
);}
}

export default App; 

import React, { Component } from 'react';
class Clock extends Component {
constructor(props){
super(props);

this.state ={
time: new Date().toLocaleTimeString()
}
}

componentDidMount() {
this.intervalID = setInterval(() =>
this.updateClock(),
1000
);}

componentWillUnmount(){
clearInterval(this.intervalID)
}

updateClock(){
this.setState({
time: new Date().toLocaleTimeString()
});
}
render() {
return (
<div className="Time">
     <p> {this.state.time}</p>
</div>
);}
}
export default Clock;
