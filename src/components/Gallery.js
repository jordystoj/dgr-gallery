import React from "react";
import {Row, Col} from "react-bootstrap";
import '../styles/Dashboard.css'
import Thumbnail from "./Thumbnail";

const Gallery = props => {

    let imageObject = {
        url: "http://www.thebetterlivingindex.com/wp-content/uploads/2018/09/DGR-2018-Triumph-Yamaha-1050x700.jpg",
        city: "Sydney",
        country: "Australia",
        photographer: "John Herbert",
        date: "2022-05-22T12:44:44Z",
        status: "confirmed"
    };

    // let albumObject = {
    //     thumbnail: "http://www.thebetterlivingindex.com/wp-content/uploads/2018/09/DGR-2018-Triumph-Yamaha-1050x700.jpg",
    //     city: "Sydney",
    //     country: "Australia",
    //     photographer: {
    //         firstName: "John",
    //         lastName: "Herbert",
    //         email: "john.herbert@dgr.com",
    //         website: "johnherbert.com",
    //         instagram: "@johnherbert",
    //         facebook: "/johnherbert",
    //     },
    //     date: "2022-05-22T12:44:44Z",
    //     status: "sorted",
    //     quantity: 78,
    //     rating: "A",
    //     tags: [
    //         "Triumph",
    //         "Couples"
    //     ]
    // };
   
    return (
        <>
            {/* This will have a list of image components being rendered */}
            {/* You will have to do API calls from in here to return a list of image objects */}
            {/* Image object will have name, url and other meta data */}
            <Row>
                <Col sm="6" md="4" style={{ textAlign: "left", fontWeight: "600"}}>
                    {props.gallery_title}
                </Col>
                <Col sm="6" md="4">
                </Col>
                <Col sm="6" md="4">
                </Col>
            </Row>

            {/* Render list of images */}
            <Row>
                <Col sm="6" md="4">
                    <Thumbnail photo={imageObject} />
                </Col>
                <Col sm="6" md="4">
                    <Thumbnail photo={imageObject}/>
                </Col>
                <Col sm="6" md="4">
                    <Thumbnail photo={imageObject}/>
                </Col>

            </Row>
            
          
        </>
        );
  };

  export default Gallery