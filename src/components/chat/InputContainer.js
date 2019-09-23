import React, { Component } from 'react';
import { Container, Form, Input } from 'reactstrap';

export default class InputContainer extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      text: ""
    }
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleNewMessage(this.state.text)
    this.setState({ text: '' })
  }
  
  render() {
    return (
      <Container className="inputbox">
        <Form onSubmit={e => this.handleSubmit(e)}>
            <Input
              className="inputfield"
              type="text"
              placeholder={'Enter message...'}
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}></Input>
        </Form>
      </Container>
    )
  }
}
