import React, {Suspense} from 'react'
import { Box, Heading, Text, Link } from 'rebass';
import blogContent from '../blogs/BlogMDX';
import blogImages from '../blogs/images';
import CustomCodeBlock from "../components/CodeBlock";
import {useTheme} from "@emotion/react";
import postData  from '../blogs/data';
import NoMatch from '../components/NoMatch'

export const Post = (props) => {
    const theme = useTheme()
    const mlArr = [0,2,4]
    const plArr = [0,2,3]

    const h4Sx={
        color: theme.h1.text,
        fontFamily: theme.fontFamily,
    }

    const codeBlockSx={
        pt: mlArr,
        pb: mlArr,
        pl: plArr,
        fontSize: ['.75em','1.5em','1.5em'],
    }

    const components = {
        pre: props => <div {...props} />,
        code: props => <Box sx={codeBlockSx}><CustomCodeBlock {...props} /></Box>,
        p: props => <Text ml={mlArr} mt={2} mb={2} {...props} />,
        h1: props => <Box pl={plArr} pt={2} pb={2} {...props}><Heading {...props} as={'h1'}/></Box>,
        h4: props => <Box pl={plArr} pt={2} pb={2} {...props}><Heading sx={h4Sx} {...props} as={'h4'}/></Box>,
        h5: props => <Box pl={plArr} pt={2} pb={2} {...props}><Heading {...props} as={'h5'}/></Box>,
        ul: props => <ul { ...props} style={{listStyleType: 'square'}} >
            <Box ml={mlArr}><span { ...props} style={{paddingLeft: '0em'}}></span></Box>
        </ul>,
        ol: props => <ol { ...props} >
        </ol>
    }

    const pathArr = props.history.location.pathname.split('/').filter(function (el) {
        return el !== "";
    });

    const post = props.history.location.state ? props.history.location.state.post : postData(pathArr[pathArr.length-1])

    const Content = post ? blogContent(post.id) : ''
    const Images = post ? blogImages(post.id) : ''

    if (post)
        return (
    <div>
      <Link href="/blog/" sx={theme.linkSXAlt1}>{'<'} Back</Link>
        <Box p={mlArr} fontFamily='arial'>
            <Box pl={mlArr} pt={mlArr} pb={mlArr} bg={theme.colors.pale}>
                <Heading as={'h1'} sx={theme.h1Sx}>{post.title}</Heading>
                <Heading p={2} as={'h5'} sx={theme.h5Sx}>Posted: {post.posted}</Heading>
            </Box>
            <Box pt={2} pl={mlArr}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Content components={components} post={post} images={Images}/>
                </Suspense>
            </Box>
        </Box>
    </div>
  )
  else
   return (<NoMatch/>)
}
