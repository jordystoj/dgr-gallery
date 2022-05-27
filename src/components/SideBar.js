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
                <Link className="nav-link" to="/">Dashboard</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-link" to="/submissions">Submissions</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-link" to="/galleries">Galleries</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-link" to="/rides">Rides</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-link" to="/tags">Tags</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-link" to="/settings">Settings</Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };

  export default SideBar