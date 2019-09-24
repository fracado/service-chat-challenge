import React, { Component } from 'react';
import './App.css';
import ChatContainer from '../chat/ChatContainer';
import InputContainer from '../chat/InputContainer';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.handleNewMessage = this.handleNewMessage.bind(this);

    this.state = {
      messages: [
        { user: false, 
          text: "Hello and welcome to our Service Chat! Please give us your email address to see your order status!"},
      ],
      orders: null
    }
  }

  handleNewMessage(userMessage) {
    let newMessages = []
    let newUserMessage = {
      user: true,
      text: userMessage
    }
    newMessages.push(newUserMessage);

    if (userMessage.includes('@')) {
      fetch('https://demo7609961.mockable.io/orders/?CUSTOMER_EMAIL' + userMessage)
      .then(res => res.json())
      .then((result) => {
        let orderResult = result;
        let newOrderMessage = {
          user: false,
          order: true
        }
        newMessages.push(newOrderMessage);
        this.setState({ messages: [...this.state.messages, ...newMessages], orders: orderResult.orders})
      })
    } else {
        let newBotMessage = {
          user: false,
          text: "Please enter your email address to check the status of your orders."
        }
        newMessages.push(newBotMessage);
        this.setState({ messages: [...this.state.messages, ...newMessages]})
    }
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
        <ChatContainer messages={this.state.messages} orders={this.state.orders}/>
        <InputContainer handleNewMessage={this.handleNewMessage}/>
      </header>
    </div>
    )
  }
}
