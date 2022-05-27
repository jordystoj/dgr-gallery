import React from "react";
import {Image, Row, Col, Badge} from "react-bootstrap";
import '../styles/Dashboard.css'
import Moment from 'react-moment';

const Thumbnail = props => {

    const statusBg = {
        proofed: {
            bg: "success",
            text: "light"
        },
        unsorted: {
            bg: "danger",
            text: "light"
        },
        sorted: {
            bg: "warning",
            text: "dark"
        }
    }
   
    return (
        <>
            <Image src={props.photo.url} className="w-100" rounded="true"></Image>
            <Row className="my-1">
                <Col sm="6" style={{ textAlign: 'left' }}>
                    <p className="mb-0">{props.photo.city}, {props.photo.country}</p>
                    <p className="mb-0">{props.photo.photographer}</p>
                    <p className="mb-0"><Moment date={props.photo.date} fromNow/></p>
                    
                </Col>
                <Col sm="6" style={{ textAlign: 'right', textTransform: 'capitalize' }}>
                    <Badge pill bg={statusBg[props.photo.status].bg} text={statusBg[props.photo.status].text} >
                        {props.photo.status}
                    </Badge>
                </Col>

            </Row>
        </>
        );
  };

  export default Thumbnail