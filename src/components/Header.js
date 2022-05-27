import React from "react";
import { Row, Col, Button} from "react-bootstrap";
import '../styles/Dashboard.css'

const Header = props => {
    
    if(props.buttons === "false"){
        return (
            <>
                <Row>
                    <Col sm="6" style={{ textAlign: "left"}}>
                        <h2 style={{ fontWeight: 700, textTransform: 'capitalize' }}>{props.title}</h2>
                    </Col>
                    <Col sm="6">
    
                    </Col>
                </Row>
            </>
            );
    } else {
        return (
            <>
                <Row>
                    <Col sm="6" style={{ textAlign: "left"}}>
                    <h2 style={{ fontWeight: 700, textTransform: 'capitalize' }}>{props.title}</h2>
                    </Col>
                    <Col sm="6" style={{ textAlign: "right"}}>
                        <Button className="main-btn" onClick={props.clickEvent}>{props.btnText}</Button>
                    </Col>
                </Row>
            </>
            );
    }
  };

  export default Header