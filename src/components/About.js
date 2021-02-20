import React from 'react';
import { useTheme } from '@emotion/react';
import avatar from '../assets/will.jpeg';
import { SocialIcon } from 'react-social-icons';

import {
    Box,
    Image,
    Heading,
    Text,
    Flex
} from 'rebass';


 export const About = () => {
     const theme = useTheme()
     const h4Sx={
         color: theme.h1.text,
         fontFamily: theme.fontFamily,
     }
     const h1Sx={
         color: theme.h4.text,
         fontFamily: theme.fontFamily,
         fontSize: [5,6,7]
     }

     return (
         <Box>
         <Flex mx={-2}>
             <Image p={1} verticalAlign='middle' src={avatar} sx={{width: 300,height: 300,borderRadius: 9999}}/>
             <Box
                 sx={{
                     color: theme.colors.primary,
                     fontSize: 20,      // theme.fontSizes[2]
                     margin: 3,        // theme.space[3]
                 }}>
                 <Heading
                     sx={h1Sx}>
                     Arthur Dayton
                 </Heading>
                 <Box p={2} sx={h4Sx}>
                     <Text pb={2}>Husband, Dad</Text>
                     <Text pb={2}>Skier, Hiker, Builder</Text>
                     <Text pb={2}>Software Engineer, Architect, Cloud Enthusiast</Text>
                     <Text pb={2}>Love me some Terraform, Go, Docker, K8s, JavaScript, React and GraphQL</Text>
                     <Text pb={2}>Relational Database Apologist, Kimball Believer</Text>
                     <Text pt={4}>#Techmiscuous</Text>
                 </Box>
             </Box>

         </Flex>
     <Box>
         <SocialIcon url="https://www.linkedin.com/in/arthurdayton/" />
     </Box>
         </Box>
     )}


