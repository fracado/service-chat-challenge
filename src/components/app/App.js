import React, { Component } from 'react';
import './App.css';
import ChatContainer from '../chat/ChatContainer';
import InputContainer from '../chat/InputContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <ChatContainer />
        <InputContainer />
      </header>
    </div>
    )
  }
}
