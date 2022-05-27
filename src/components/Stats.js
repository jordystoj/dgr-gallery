import React from "react";
import {Row, Col, Card} from "react-bootstrap";
import '../styles/Dashboard.css'

const Stats = props => {
   

    return (
        <>
            <Row>
                <Col xs="4">
                    <Card className="my-2 stat-cards">
                        <Card.Body >
                            <h2 className="h2">6000</h2>
                            <p>Galleries</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="4">
                    <Card className="my-2 stat-cards">
                        <Card.Body >
                            <h2 className="h2 font-weight-bold">6000</h2>
                            <p>Galleries</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="4">
                    <Card className="my-2 stat-cards">
                        <Card.Body >
                            <h2 className="h2">6000</h2>
                            <p>Galleries</p>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            
          
        </>
        );
  };

  export default Stats