import React, { Component } from 'react';
import './App.css';
import ChatContainer from '../chat/ChatContainer';
import InputContainer from '../chat/InputContainer';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [
        { user: false, 
          text: "Hello and welcome to our Service Chat! Please give us your email address to see your order status!"},
      ]
    }
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
        <ChatContainer messages={this.state.messages}/>
        <InputContainer />
      </header>
    </div>
    )
  }
}
