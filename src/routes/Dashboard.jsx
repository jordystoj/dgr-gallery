import React from "react";
import {Container, Row, Col, Button } from "react-bootstrap";
import SideBar from "../components/SideBar";
import Stats from "../components/Stats";
import Gallery from "../components/Gallery";
import '../styles/Dashboard.css'



const Dashboard = props => {
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

                                <Stats />

                                {/* Gallery action buttons */}
                                <Row>
                                    <Col xs="4" className="my-4" style={{ textAlign: "left", fontWeight: "600"}}>
                                        <p>Actions</p>
                                        <Button size="md" className="main-btn w-100">Add new gallery</Button>
                                    
                                    </Col>
                                    <Col xs="4" className="my-4">
                                        <p></p>
                                        <Button size="md" className="main-btn w-100 my-4">View gallery</Button>
                                    </Col>
                                    <Col xs="4" className="my-4">
                                        <p></p>
                                        <Button size="md" className="main-btn w-100 my-4">Search galleries</Button>
                                    </Col>

                                </Row>

                                {/* Gallery */}
                                <Gallery gallery_title="Latest Submitted" sort="newest"/>
                            </Col>
                            <Col sm="1"></Col>
                        </Row>

                    </Container>    
                </Col>
            </Row>
        </>
    )
}

export default Dashboard;