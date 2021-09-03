import { Dropdown } from 'bootstrap';
import React from 'react';
import {BrowserRouter, Switch, NavLink, Route} from 'react-router-dom'
import { Button, Navbar, Nav, Container, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './nav.css'
import {Link} from 'react-router-dom';

function HNav(){

    return<div className='nav'>
        <Navbar expand="lg">
            {/* <Container> */}
                <Link to = '/' style={{textDecoration: 'none'}} className='navbar-brand'>BINANCERS</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                <NavDropdown title="Buy Crypto" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">With Credit Card</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.2">With Paypal</NavDropdown.Item>
                    </NavDropdown>
                    <Link to='/wallet' style={{textDecoration: 'none'}} className='nav-link'>Wallet</Link>
                    <Link to='/market' style={{textDecoration: 'none'}} className='nav-link'>Market</Link>
                    <Nav.Link href="#about">About Us</Nav.Link>
                    
                    
                </Nav>
                <span style={{marginLeft: 'auto'}}>
                    <Nav.Link href="#home">
                        {/* <a href='#link'  class='nav-link' style={{display:'inline-block'}}>hi{' '}</a> */}
                        {/* <span>Hello</span> */}
                        <button className='btn outline-warning'>Signup</button>
                        <button className='btn btn-success'>Login</button>
                    </Nav.Link>
                </span>
                </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
  </div>
}



export default HNav;