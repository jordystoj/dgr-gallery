import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import SideBar from "../components/SideBar";
import '../styles/Dashboard.css'


const Tags = props => {
    return(
        <>

            <Row>
                <Col xs="3">
                    <SideBar />
                </Col>
                <Col xs="9" className="bg-main">
                    <Container>
                        <Row className="mt-5">
                            <Col sm="1"></Col>
                            <Col sm="10">

                                
                            </Col>
                            <Col sm="1"></Col>
                        </Row>

                    </Container>    
                </Col>
            </Row>
        </>
    )
}

export default Tags;