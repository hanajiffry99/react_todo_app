import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";
import { Container,Col,Row} from "react-bootstrap";
import "./Navbar.css";

function Navbar(){
    return(
        <>
        <Container className="navbar" fluid style={{ backgroundColor:'#376E6F', height: '170px', position: 'sticky-top'}}>
          <Row>
          <Col xs lg="3.5">
           <NavLink activeClassName="active" to='/'>Home</NavLink>
           </Col>
           <Col xs lg="3.5">
           <NavLink activeClassName="active" to='/post'>Posts</NavLink>
           </Col>
           <Col xs lg="3.5">
           <NavLink activeClassName="active" to='/todo'>Todo</NavLink>
           </Col>
           <Col xs lg="3.5">
           <NavLink activeClassName="active" to='/note'>Notes</NavLink>
           </Col>
          </Row>
        </Container>
        </>
    );
}

export default Navbar;