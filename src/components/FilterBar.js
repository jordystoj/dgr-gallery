import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import '../styles/Dashboard.css'

const FilterBar = ({ album, setAlbum }) => {
    // Country
    // const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    // const country_el = country_list.map((country, index) => <option key={index} value={country}>{country}</option>)

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cities = [...new Set(album.map((value) => value.city))];
    const countries = [...new Set(album.map((value) => value.country))];

    // Initial filter state
    var filterState = {
        city: "",
        country: "",
        year: "",
        status: "",
        rating: ""
    }

    // Setting state for the filter
    const [filter, setFilter] = useState(filterState);

    
    // Set the state for our filters
    // const [city, setCity] = useState(null);
    
    // Handle the change of the select buttons
    function handleChange(event){
        switch(event.target.id){
            case "city-filter":
                setFilter(prevState => {
                    let tmp = Object.assign({}, prevState);
                    tmp.city = event.target.value;
                    return tmp 
                });
                break;
            default:
                setFilter(filterState)
                break;
        }
    }

    // Get value from state after rendering
    useEffect(() => {
        console.log(filter);
    })

    return (
        <>
            <Row>
                <Col sm="2">
                    <Form.Select id="year-filter">
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
                </Col>
                <Col sm="2">
                    <Form.Select id="country-filter">
                        <option> Country </option>
                        {/* {country_el} */}
                        {
                            countries.map((country, index) => {
                                return (
                                    <option key={index} value={country}>{country}</option>
                                );
                            })
                        }
                    </Form.Select>
                </Col>
                <Col sm="2">
                    <Form.Select id="city-filter" onChange={handleChange}>
                        {/* This will be pulled from DGR db */}
                        <option> City </option>
                        {
                            cities.map((city, index) => {
                                return (
                                    <option key={index} value={city}>{city}</option>
                                );
                            })
                        }
                    </Form.Select>
                </Col>
                <Col sm="2">
                    <Form.Select id="status-filter">
                        {/* This will be pulled from DGR db */}
                        <option> Status </option>
                        <option value="proofed">Proofed</option>
                        <option value="sorted">Sorted</option>
                        <option value="unsorted">Unsorted</option>
                    </Form.Select>
                </Col>
                <Col sm="2">
                    <Form.Select id="rating-filter">
                        {/* This will be pulled from DGR db */}
                        <option> Rating </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Col>
                <Col sm="2">
                    <Button className="w-100 main-btn" onClick={handleShow}>
                        <FontAwesomeIcon icon={faSliders} />
                        More Filters
                    </Button>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>More Filters</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <Row className="my-2">
                        <Col sm="6">
                            <Form.Select id="cameraUsed-filter" aria-describedby="camera-info">
                                <option value="Canon">Canon</option>
                                <option value="Nikon">Nikon</option>
                                <option value="RED">RED</option>
                                <option value="Sony">Sony</option>
                            </Form.Select>
                            <Form.Text id="camera-info" muted>
                                Camera used by photographer
                            </Form.Text>
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col sm="6">
                            <Form.Select id="age-filter" aria-describedby="age">
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                            </Form.Select>
                            <Form.Text id="age" muted>
                                Sort by age
                            </Form.Text>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
        );
  };

  export default FilterBar