import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import OrderMessage from './OrderMessage';

export default class ChatContainer extends Component {

  componentDidUpdate() {
    let objDiv = document.getElementById("chat");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    return (
      <div className="chatbox" id="chat">
        <Card>
          <CardBody>
            <div className="message">{this.props.messages.map(
              (message, i) => <div key={i} className={message.user ? 'align-right' : 'align-left'}>{message.order ? <OrderMessage orders={this.props.orders}/> : message.text}</div>
            )}
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}
