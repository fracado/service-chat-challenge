import React from 'react';
import Order from './Order'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export default class OrderMessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card>
        <CardBody className="order">
          <CardTitle><p>Here are your order shipment details:</p></CardTitle>
            <CardText>{this.props.orders.map(order => order.status === 'shipped' ? <Order order={order} /> : "No shipped orders found.")}</CardText>
          </CardBody>
      </Card>
    )
  }
}