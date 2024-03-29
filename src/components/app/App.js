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

    // RegEx for Email Validation
    let re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (re.test(userMessage)) {
      fetch('https://demo7609961.mockable.io/orders/?CUSTOMER_EMAIL=' + userMessage)
      .then(res => res.json())
      .then((result) => {
        let orderResult = result;
        let newOrderMessage = {
          user: false,
          order: true
        }
        newMessages.push(newOrderMessage);
        this.setState({ messages: [...this.state.messages, ...newMessages], orders: orderResult.orders})
      }).catch(err => {
        console.log(err)
      })
    } else {
        let newBotMessage = {
          user: false,
          text: "I'm sorry, I can't find any orders with that email address. Please try again."
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
