import React from 'react'
import { Link } from "react-router-dom";
import {Box, Heading} from 'rebass';
import data from '../blogs/data.json';
import {useTheme} from "@emotion/react";


export const Blogs = () => {
    const theme = useTheme()
    const h1Sx={
        color: theme.h4.text,
        fontFamily: theme.fontFamily,
    }

    const linkSX = {
        color: theme.navbar.background,
        fontWeight: 'bold',
        fontSize: '1em',
        textDecoration: 'none',
        padding: 3,
        ':hover': {
            color: theme.navbar.hover,
            fontWeight: 900,
        }
    };

    console.log(data)
        return (
            <div>
                <Heading as={'h1'} sx={h1Sx}>Posts</Heading>
                    <ul>
                            {data.map(post => (
                                <li key={post.id}>
                                    <Box sx={linkSX}>
                                        <Link style={linkSX} to={
                                            {
                                                pathname: `/post/${post.id}/`,
                                                state: {
                                                    post: post
                                                },
                                            }
                                        }>{post.title}</Link>
                                    </Box>
                                </li>
                            ))}
                    </ul>
            </div>
        )
}
