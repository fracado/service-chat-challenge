import React, { Component } from 'react';
import parser from 'xml2json-light';
import { Card, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default class Order extends Component {
  constructor(props) {
    super(props);

    this.displayDate = this.displayDate.bind(this);
    
    this.state = {
      shipment: null
    }
  }

  componentDidMount() {
      fetch('https://demo7609961.mockable.io/dhl/status/',{
        method: 'POST'
      }).then(res => res.text())
      .then((result) => {
        let xml = result;
        let shipment = parser.xml2json(xml);
        this.setState({ shipment: shipment })
      }).catch(err => {
        console.log(err)
      });
  }

  displayDate(input) {
    let date = this.state.shipment.shipmentStatus[input].substring(0, 10)
    let time = this.state.shipment.shipmentStatus[input].substring(12, 16)
    return (<div>on {date} at {time}h</div>)
  }


  render() {
    let order = this.props.order
    return (
      <div>
        <Card className="shipment">
          <Col>
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>Order ID:</ListGroupItemHeading>
                <ListGroupItemText>{this.state.shipment ? order.order_id : ""}</ListGroupItemText>
                <ListGroupItemHeading>DHL Tracking ID:</ListGroupItemHeading>
                <ListGroupItemText>{this.state.shipment ? order.dhl_tracking_id : ""}</ListGroupItemText>
                <ListGroupItemHeading>Status:</ListGroupItemHeading>
                <ListGroupItemText>{this.state.shipment ? this.state.shipment.shipmentStatus.status : ""}</ListGroupItemText>
                <ListGroupItemHeading>Shipped:</ListGroupItemHeading>
                <ListGroupItemText>{this.state.shipment ? this.displayDate("shipmentDate") : ""}</ListGroupItemText>
                <ListGroupItemHeading>Last Update:</ListGroupItemHeading>
                <ListGroupItemText>{this.state.shipment ? this.displayDate("lastUpdate") : ""}</ListGroupItemText>
                <ListGroupItemHeading>Delivered to:</ListGroupItemHeading>
                <ListGroupItemText>{this.state.shipment ? this.state.shipment.shipmentStatus.extraInfo : ""}</ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Card>
      </div>
    )
  }
}
