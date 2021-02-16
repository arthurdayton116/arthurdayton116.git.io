import React from 'react';
import { Image, Flex, Box, Link } from 'rebass';
// import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/ObservatoryPark.jpg';
import {useTheme} from "@emotion/react";

// const Styles = styled.div`
//   .navbar { background-color: #222; }
//   a, .navbar-nav, .navbar-primary .nav-link {
//     color: red;
//     font-size: 1.4em;
//     &:hover { color: white; }
//   }
//   .navbar-brand {
//     color: #9FFFCB;
//     &:hover { color: white; }
//   }
//   .form-center {
//     position: absolute !important;
//     left: 25%;
//     right: 25%;
//   }
//   .navbar-nav > li > a {
//     color: white;
//   }
// `;



const scale = 5
const pw = 27.2 * scale
const ph = 18.5 * scale
export const NavigationBar = (props) => {
    const theme = useTheme()
    const linkSX = {
        color: theme.navbar.text,
        fontWeight: 'bold',
        fontSize: '1.5em',
        textDecoration: 'none',
        padding: 3,
        ':hover': {
            color: theme.navbar.hover,
            fontWeight: 900,
        }
    };

    return (
    // <Styles>
        <Box pb={4}>
        <Flex
            bg={theme.navbar.background}
            alignItems='center'>
            <Image
                src={logo}
                width={pw}
                height={ph}
                sx={{
                    width: {pw},
                    height: {ph},
                    borderRadius: 0,
                }}
            />
                <Link variant='nav' href='/blog' sx={linkSX} >Blog</Link>
                <Link variant='nav' href='/about' sx={linkSX} >About</Link>
            <Box mx='auto' />
            <Link variant='nav' href='#!'>
                Profile
            </Link>
        </Flex>
        </Box>
    // <Navbar bg='blue' >
    //     <Navbar.Brand href="/about">
    //         <img
    //             src={logo}
    //             width={pw}
    //             height={ph}
    //             className="d-inline-block align-top"
    //             alt="The spot"
    //         />
    //     </Navbar.Brand>
    //     <Nav className="mr-auto">
    //         <Nav className="ml-auto">
    //             {/*<Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>*/}
    //             <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
    //             <Nav.Item><Nav.Link href="/blog">Blog</Nav.Link></Nav.Item>
    //         </Nav>
    //     </Nav>
    //     <Form inline>
    //         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //         <Button variant="outline-light">Search</Button>
    //     </Form>
    // </Navbar>
    // </Styles>
)}
