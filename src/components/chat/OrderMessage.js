import React from 'react';
import Order from './Order'
import { Card, CardBody, CardTitle } from 'reactstrap';

export default class OrderMessage extends React.Component {

  render() {
    return (
      <Card>
        <CardBody className="order">
          <CardTitle>Here are your order shipment details:</CardTitle>
            <div>{this.props.orders.map(order => order.status === 'shipped' ? <Order key={order.order_id} order={order} /> : "No shipped orders found.")}</div>
          </CardBody>
      </Card>
    )
  }
}