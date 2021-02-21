import React from 'react';
import { Image, Flex, Box, Link } from 'rebass';
import logo from '../assets/ObservatoryPark.jpg';
import {useTheme} from "@emotion/react";

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
        <Box pb={[2,2,4]}>
        <Flex
            bg={theme.navbar.background}
            alignItems='center'>
            <Image
                src={logo}
                sx={{
                    width: theme.navbar.imageWidth,
                    height: theme.navbar.imageHeight,
                    borderRadius: 0,
                }}
            />
                <Link variant='nav' href='/blog' sx={linkSX} >Blog</Link>
                <Link variant='nav' href='/about' sx={linkSX} >About</Link>
            <Box mx='auto' />
        </Flex>
        </Box>
)}
