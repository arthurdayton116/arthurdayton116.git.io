import React, {Suspense} from 'react'
import { Box, Heading, Text, Link } from 'rebass';
import blogContent from '../blogs/BlogMDX';
import blogImages from '../blogs/images';
import CustomCodeBlock from "../components/CodeBlock";
import {useTheme} from "@emotion/react";

export const Post = (props) => {
    const post = props.history.location.state.post;
    const Content = blogContent(post.id)
    const Images = blogImages(post.id)
    const theme = useTheme()

    const h1Sx={
        color: theme.h4.text,
        fontFamily: theme.fontFamily,
    }

    const h4Sx={
        color: theme.h1.text,
        fontFamily: theme.fontFamily,
    }

    const codeBlockSx={
        pt: [2,2,4],
        pb: [2,2,4],
        pl: [0,2,3],
        fontSize: ['.75em','1.5em','1.5em'],
    }


    const components = {
        pre: props => <div {...props} />,
        code: props => <Box sx={codeBlockSx}><CustomCodeBlock {...props} /></Box>,
        p: props => <Text ml={[0,2,4]} mt={2} mb={2} {...props} />,
        h1: props => <Box pl={[0,2,3]} pt={2} pb={2} {...props}><Heading {...props} as={'h1'}/></Box>,
        h4: props => <Box pl={[0,2,3]} pt={2} pb={2} {...props}><Heading sx={h4Sx} {...props} as={'h4'}/></Box>,
        h5: props => <Box pl={[0,2,3]} pt={2} pb={2} {...props}><Heading {...props} as={'h5'}/></Box>,
        // li: props => ,
        ul: props => <ul { ...props} style={{listStyleType: 'square'}} >
            <Box ml={[0,2,4]}><li ><span { ...props} style={{paddingLeft: '0em'}}></span></li></Box>
        </ul>,
        ol: props => <ol { ...props} >
        </ol>
    }

    const linkSX = {
        color: theme.navbar.background,
        fontWeight: 'bold',
        fontSize: ['1em','1em','1.5em'],
        textDecoration: 'none',
        p: [1,2,3],
        ':hover': {
            color: theme.navbar.hover,
            fontWeight: 900,
        }
    };

  return (
    <div>
      <Link href="/blog/" sx={linkSX}>{'<'} Back</Link>
        <Box p={[0,2,4]} fontFamily='arial'>
            <Box pl={[0,2,4]} pt={[0,2,4]} pb={[0,2,4]} bg={theme.colors.pale}>
                <Heading as={'h1'} sx={h1Sx}>{post.title}</Heading>
            </Box>
            <Box pt={2} pl={[0,2,4]}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Content components={components} post={post} images={Images}/>
                </Suspense>
            </Box>
        </Box>
    </div>
  )
}
