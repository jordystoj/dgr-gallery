import React, { useState } from "react";
import {Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import SideBar from "../components/SideBar";
import '../styles/Dashboard.css'
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import { v4 as uuidv4 } from 'uuid';
import Thumbnail from '../components/Thumbnail';

const Galleries = props => {
    
    let buttons = true;

    // For add gallery modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    const country_el = country_list.map((country, index) => <option key={index} value={country}>{country}</option>)


    // Create some album objects
    const albumObject = [
        {
            photographerName: "Jordan Stojcevski",
            instagram: "@SoTallRightNow",
            faceboook: "/jordystoj",
            url: "https://uc09cd25a15cd38f7ce74c269783.previews.dropboxusercontent.com/p/thumb/ABhzXyESKrDQJuAZYhU_Y5x91aYiigywyhXdMDScH0f4_tzjW1KnblI7-7nHN64DGpE1JPQEeSdTa_A1V6KExd-gRn2Cw-V658YlySNUUajL9pCIY1TxIlEW8WcI-8kqjLggoNVsiwBzDQyiCigrG8oeczjBNdFb7ddrkHV40uiNp0YhcCvyW5BBdikph4uViWd7Z-ef_zx3o_Sp4j01pNSRww5zyUG319wBSoclu4UhUQxKvtNNzJqW9ZVyneuYDU44ahk2wg_YVjwyOQt5TVckph_ljIF9lF9mox7A5ljN_2qBnu5X_xzybrQEVIPokArijR22054Vs0VV_NL9McXLCXurrzkELTrLQFVxkFXdqU5JU7B9h8H3bC5UIqTg5_Q/p.jpeg",
            imageQty: 78,
            city: "Sydney",
            country: "Australia",
            date: "2022-05-25T12:44:44Z",
            status: "unsorted",
            albumId: uuidv4()
        },
        {
            photographerName: "Charles Leclerc",
            instagram: "@charlesleclerc",
            faceboook: "/charlesleclerc",
            url: "https://uc7298e09c6bd508a479e871bb78.previews.dropboxusercontent.com/p/thumb/ABi-w26ikmih_F0LYJT9psfJOquF0RHgM2Go-ik0Lrh7XQnE0mCr7fsUTEbMuR2QORYCObjM16GlOVA8qG0uX1fEfqIDVS-KTM7A1SOjQ_IrmDZ2XJ2ZPFdKibdDGBtY-MMNSTIWeEXS2srqwq9VPz5GlYZ6EqXW4k4cZfK-ZurnF1tvGmaCD4pH3fK-c2zGT2PPAE9dnC7rPwBTOYTm2sMC8UvKiLvkbqj5uHaWt9R-qmymbj83EZSNFEeQwwl7jyMXmrd-XzTFB0Ir1_T98gw3Fjm-BUQawvV2l75uFBgkYw6DTGUbkx00zbxApadJDv0L2OzXlOReGDvZXKTS6EDecjeqAU9-PJyuEB8hcB7eySziVzutzeORCA_hNQJh2fM/p.jpeg",
            imageQty: 34,
            city: "Monaco",
            country: "Monaco",
            date: "2022-05-24T12:44:44Z",
            status: "sorted",
            albumId: uuidv4()
        },
        {
            photographerName: "Mark Hawwa",
            instagram: "@markhawwa",
            faceboook: "/markhawwa",
            url: "https://uc10af39a16331207a8ba66f7bf9.previews.dropboxusercontent.com/p/thumb/ABjmFw8DRCO8wbs27RbjvEbL2nfWAl_kVpsgMJ2dktomyEcFy3M95_pb4fN1MV9xWw0HExPvcyB7kc-8Qv1yRNH6-jLb-XneU4cTx7rayiY86zrbYMwVI9EZ0PEfy7LPHsuSOb8HD26z5-FUgqB6Ek8vQt978zbO8pKhNtocLDGOu6yAIGy5mi28HQUylYwIP7myy0DN8rGH-SeJH46q4QuRLNHHZWy02494IQ9xMX6HIUE9MZSCXbVF5HcVrha9sI-fZOfQlKB_KpijQCdShPX026zqKjPxDUFaYgNUWpIxEPamwwwLGQ5i-fYaoeMk-JmcIXcZjbsCWw-fDZgP8T-j1F4hEGtdoZcQQ2c5R8NJn80buJYWDAp-UVoHR4bnVo8/p.jpeg",
            imageQty: 700,
            city: "Johannesburg",
            country: "South Africa",
            date: "2022-05-22T12:44:44Z",
            status: "proofed",
            albumId: uuidv4()
        },
        {
            photographer: "Max Verstappen",
            instagram: "@maxverstappen1",
            faceboook: "/maxverstappen",
            url: "https://uc773630ef32c133b423d274ef69.previews.dropboxusercontent.com/p/thumb/ABj--rcInRg5oQT-aB9JEnOfFD4RvITgzYb0Ifa2ccFxadfRjlm9T1lO7-a09RJfb6c1e2OIQ_MsQNXuHxbEX9fvFG1hPCURY8DHh898b6Jm5CBZf2QXLu7wIBNJFCMVo8KnUVndsax1gixaieFCtS3ElM0nm6STK3cyBaW5rO6-etZ5R0-AQi8RIuixor-aLm7g4WuMMCxuozlR2aacfHK7YhLldyQyqUa5DzT3obw5nDb1sQQml8UNwWU-MKxHwuxM_P3UQTABwdvghUxqgf_eaWGW8tBkFYxQTUyU9NZHSpt00oLuoSRJEtnpnRjXopUDoS44GNvuSRU1xrPaNJ4n0pP8x_GIqGD6N07j5SRuVFrIGoZOAaAkGiGC8mm9qkc/p.jpeg",
            imageQty: 134,
            city: "Sydney",
            country: "Australia",
            date: "2022-05-21T12:44:44Z",
            status: "sorted",
            albumId: uuidv4()
        }
    ];

    // Set the state of the app
    const [album, setAlbum] = useState(albumObject);

    function handleSubmit(event) {
        event.preventDefault();

        let newAlbum = {
            photographer: event.target[0].value,
            email: event.target[1].value,
            instagram: event.target[2].value,
            faceboook: event.target[3].value,
            url: "https://uc773630ef32c133b423d274ef69.previews.dropboxusercontent.com/p/thumb/ABj--rcInRg5oQT-aB9JEnOfFD4RvITgzYb0Ifa2ccFxadfRjlm9T1lO7-a09RJfb6c1e2OIQ_MsQNXuHxbEX9fvFG1hPCURY8DHh898b6Jm5CBZf2QXLu7wIBNJFCMVo8KnUVndsax1gixaieFCtS3ElM0nm6STK3cyBaW5rO6-etZ5R0-AQi8RIuixor-aLm7g4WuMMCxuozlR2aacfHK7YhLldyQyqUa5DzT3obw5nDb1sQQml8UNwWU-MKxHwuxM_P3UQTABwdvghUxqgf_eaWGW8tBkFYxQTUyU9NZHSpt00oLuoSRJEtnpnRjXopUDoS44GNvuSRU1xrPaNJ4n0pP8x_GIqGD6N07j5SRuVFrIGoZOAaAkGiGC8mm9qkc/p.jpeg",
            imageQty: 0,
            city: event.target[4].value,
            country: event.target[5].value,
            date: new Date(),
            status: "unsorted",
            year: event.target[6].value,
            albumId: uuidv4()
        }

        // Update db
        
        // Push to state
        setAlbum(prevState => [...prevState, newAlbum]);

        // Close modal ~ in real thing go to next slide for image uploads
        handleClose();
    }

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
                                <Header title="Galleries" buttons={buttons} btnText="Add Gallery +" clickEvent={handleShow} />
                                
                                {/* Filter Bar */}
                                <FilterBar album={album} setAlbum={setAlbum}/>

                                {/* Galleries */}
                                <Row className="mt-4">
                                    <Thumbnail album={album}/>
                                </Row>
                            </Col>
                            <Col sm="1"></Col>
                        </Row>

                    </Container>    
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Gallery</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="photographerName">
                            <Form.Label>Photographer Name</Form.Label>
                            <Form.Control type="text" placeholder="John Smith" name="photographerName" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="johnsmith@gmail.com" name="email"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="instagram">
                            <Form.Label>Instagram Account</Form.Label>
                            <Form.Control type="text" placeholder="johnsmith" name="instagram"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="facebook">
                            <Form.Label>Facebook Account</Form.Label>
                            <Form.Control type="text" placeholder="johnsmith23" name="facebook" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Select name="country">
                                {country_el}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Select name="city">
                                <option value="sydney">Sydney</option>
                                <option value="canberra">Canberra</option>
                                <option value="gold coast">Gold Coast</option>
                                <option value="wollongong">Wollongong</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="year">
                            <Form.Label>Year</Form.Label>
                            <Form.Select name="year" >
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                            </Form.Select>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Modal.Body>
                
            </Modal>
        </>
    )
}

export default Galleries;