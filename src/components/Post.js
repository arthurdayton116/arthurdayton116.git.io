import React, {Suspense} from 'react'
import { Link } from "react-router-dom";
import { Box, Heading, Text } from 'rebass';
import blogContent from '../blogs/BlogMDX'
import CustomCodeBlock from "../components/CodeBlock";
import {useTheme} from "@emotion/react";

const components = {
    pre: props => <div {...props} />,
    code: props => <Box pt={4} pb={4} pl={4}><CustomCodeBlock {...props} /></Box>,
    p: props => <Text ml={4} mt={2} mb={2} {...props} />,
    h1: props => <Box pl={3} pt={2} pb={2} {...props}><Heading {...props} as={'h1'}/></Box>
}

export const Post = (props) => {
    const post = props.history.location.state.post;
    const Content = blogContent(post.id)
    const theme = useTheme()

  return (
    <div>
      <Link to="/blog/">{'<'} Back</Link>
        <Box p={4} >
            <Box pl={3} pt={2} pb={2} bg={theme.colors.primary}>
                <Heading as={'h1'} >{post.title}</Heading>
            </Box>
            <Box pt={2} pl={4}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Content components={components} post={post}/>
                </Suspense>
            </Box>
        </Box>
    </div>
  )
}
