import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";
import { Container} from "react-bootstrap";

function Navbar(){
    return(
        <>
        <Container>
           <NavLink activeClassName="active" to='/'>Home</NavLink>
           <NavLink activeClassName="active" to='/post'>Posts</NavLink>
           <NavLink activeClassName="active" to='/todo'>Todo</NavLink>
        </Container>
        </>
    );
}

export default Navbar;