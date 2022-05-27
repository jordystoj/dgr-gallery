import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/Dashboard.css'

const SideBar = props => {
   

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block sidebar" activeKey="/home">
            
            <Navbar.Brand>DGR Gallery</Navbar.Brand>

            <Nav.Item>
                <Nav.Link className="nav-link">
                    <Link to="/">Dashboard</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-link">
                    <Link to="/submissions">Submissions</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-link">
                    <Link to="/galleries">Galleries</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-link" >
                    <Link to="/rides">Rides</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-link">
                    <Link to="/tags">Tags</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-link">
                    <Link to="/settings">Settings</Link>
                </Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };

  export default SideBar