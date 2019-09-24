import React, { Component } from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

export default class ChatContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="chatbox">
        <Card>
          <CardBody>
            <CardText className="message">{this.props.messages.map(
              message => <div className={message.user ? 'align-right' : 'align-left'}>{message.text}</div>
            )}
            </CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}
