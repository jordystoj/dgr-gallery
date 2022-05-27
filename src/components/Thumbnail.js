import React from "react";
import {Image, Row, Col, Badge } from "react-bootstrap";
import '../styles/Dashboard.css'
import Moment from 'react-moment';

const Thumbnail = ({ album }) => {

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
        },
        confirmed: {
            bg: "success",
            text: "light"
        }
    }
   
    return (
        <>
            { 
                album.map((item, index) => {
                    return (

                        <Col sm="4" key={index}>
                            <a href={`/album/${item.albumId}`} style={{ textDecoration: 'none', color: "#000"}}>
                                <Image src={item.url} className="w-100" rounded="true"></Image>
                                <Row className="my-1">
                                    <Col sm="6" style={{ textAlign: 'left' }}>
                                        <p className="mb-0">{item.city}, {item.country}</p>
                                        <p className="mb-0">{item.photographer}</p>
                                        <p className="mb-0"><Moment date={item.date} fromNow/></p>
                                        
                                    </Col>
                                    <Col sm="6" style={{ textAlign: 'right', textTransform: 'capitalize' }}>
                                        <Badge pill bg={statusBg[item.status].bg} text={statusBg[item.status].text} >
                                            {item.status}
                                        </Badge>
                                    </Col>

                                </Row>
                            </a>
                        </Col>
                    )
                
                })
            }
        </>
        );
  };

  export default Thumbnail