import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/ObservatoryPark.jpg';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-primary .nav-link {
    color: red;
    font-size: 1.4em;
    &:hover { color: white; }
  }
  .navbar-brand {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .navbar-nav > li > a {
    color: white;
  }
`;
const scale = 4
const pw = 27.2 * scale
const ph = 18.5 * scale
export const NavigationBar = (props) => {
    return (
    <Styles>
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/about">
            <img
                src={logo}
                width={pw}
                height={ph}
                className="d-inline-block align-top"
                alt="The spot"
            />
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav className="ml-auto">
                {/*<Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>*/}
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/blog">Blog</Nav.Link></Nav.Item>
            </Nav>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
        </Form>
    </Navbar>
    </Styles>
)}
