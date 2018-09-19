import React, { Component } from 'react';
import './App.css';
import Shift from './components/Shift';
import PlainText from './components/PlainText';
import CipherText from './components/CipherText';

class App extends Component {
  state = {
    shift: 0,
    currentText: "",
    textType: ""
  }

  setShift = (shift) => {
    this.setState({shift: Number(shift)})
  }

  convertText = (text, textType) => {
    this.setState({currentText:text, textType:textType})
  }

  render() {
    return (
      <div className="App">
        <Shift setShift={this.setShift}/>
        <PlainText
          shift={this.state.shift}
          textType={this.state.textType}
          currentText={this.state.currentText}
          convertText={this.convertText}
        />
        <CipherText
          shift={this.state.shift}
          textType={this.state.textType}
          currentText={this.state.currentText}
          convertText={this.convertText}
        />
      </div>
    );
  }
}

export default App;
