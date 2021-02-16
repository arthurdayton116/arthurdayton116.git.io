import React, {lazy, Suspense} from 'react';
import { useTheme } from '@emotion/react';
import avatar from '../assets/will.jpeg';
import {importMDX} from "mdx.macro";
const Content = lazy(() => importMDX('../mdx/About.mdx'))

 export const About = () => {
     const theme = useTheme()
     return (
         <Suspense fallback={<div>Loading...</div>}>
             <Content theme={theme}
                      logo={avatar}
             />
         </Suspense>
         )}


