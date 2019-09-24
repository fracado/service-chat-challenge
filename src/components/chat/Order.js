import React, { Component } from 'react';
import parser from 'xml2json-light';
import { Card, Col } from 'reactstrap';

export default class Order extends Component {
  constructor(props) {
    super(props);
    
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
      });
  }

  render() {
    let order = this.props.order
    return (
      <div>
        <Card className="shipment">
          <Col>
              <ul>
                <li>Order ID: {this.state.shipment ? order.order_id : ""}</li>
                <li>DHL Tracking ID: {this.state.shipment ? order.dhl_tracking_id : ""}</li>
                <li>Status: {this.state.shipment ? this.state.shipment.shipmentStatus.status : ""}</li>
                <li>Shipped: {this.state.shipment ? this.state.shipment.shipmentStatus.shipmentDate: ""}</li>
                <li>Last Update: {this.state.shipment ? this.state.shipment.shipmentStatus.lastUpdate : ""}</li>
                <li>Delivered to: {this.state.shipment ? this.state.shipment.shipmentStatus.extraInfo : ""}</li>
              </ul>
          </Col>
        </Card>
      </div>
    )
  }
}
