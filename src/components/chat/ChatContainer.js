import React, { Component } from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import OrderMessage from './OrderMessage';

export default class ChatContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    let objDiv = document.getElementById("chat");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    return (
      <div className="chatbox" id="chat">
        <Card>
          <CardBody>
            <CardText className="message">{this.props.messages.map(
              message => <div className={message.user ? 'align-right' : 'align-left'}>{message.order ? <OrderMessage orders={this.props.orders}/> : message.text}</div>
            )}
            </CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}
