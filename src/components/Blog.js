import React from 'react'
import { Link } from "react-router-dom";
import { Box } from 'rebass';
import data from '../blogs/data.json';
import {useTheme} from "@emotion/react";


export const Blogs = () => {
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
    console.log(data)
        return (
            <div>
                    <h1>Posts</h1>
                    <br />
                    All Posts:
                    <ul>
                            {data.map(post => (
                                <li key={post.id}>
                                    <Box sx={linkSX}>
                                        <Link to={
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
