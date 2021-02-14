import React from 'react'
import { Link } from "react-router-dom";
import data from '../blogs/data.json';

export const Blogs = () => {
    console.log(data)
        return (
            <div>
                    <h1>Blog Posts</h1>
                    <br />
                    All Posts:
                    <ul>
                            {data.map(post => (
                                <li key={post.id}>
                                        <Link to={
                                            {
                                                pathname: `/post/${post.id}/`,
                                                state: {
                                                    post: post
                                                },
                                            }
                                        }>{post.title}</Link>
                                </li>
                            ))}
                    </ul>
            </div>
        )
}
