import { Dropdown } from 'bootstrap';
import React from 'react';
import { Button, Navbar, Nav, Container, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './nav.css'
import logo from '../img/logo.PNG'


function HNav(){

    return<div className='nav'>
        <Navbar className='navbar-dark' expand="lg">
                <div to = '/' style={{textDecoration: 'none', color: 'white'}} className='navbar-brand'><img src={logo} style={{width: '50px', height: '50px'}}></img>CATWARS</div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <span style={{marginLeft: 'auto'}}>
                    <Nav.Link className='nav-options' href="#tokenomics">Tokenomics</Nav.Link>
                    <Nav.Link className='nav-options'  href="#roadmap">Roadmap</Nav.Link>
                    <Nav.Link className='nav-options' href="https://www.dextools.io/app/bsc/pair-explorer/0x83520ca482a1c3bc1ccf73ceb58f6fee8a590da7" target='_blank'>Dextools</Nav.Link>
                    <Nav.Link className='nav-options' href="#">Coingecko</Nav.Link>
                    <Nav.Link className='nav-options' href='https://bscscan.com/token/0x83520ca482a1c3bc1ccf73ceb58f6fee8a590da7' target='_blank'>Contract</Nav.Link>
                </span>
                </Navbar.Collapse>
        </Navbar>
  </div>
}



export default HNav;