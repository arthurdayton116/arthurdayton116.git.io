import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import { MDXProvider } from "@mdx-js/react";
// import CustomCodeBlock from "./components/CodeBlock";

ReactDOM.render(<App />, document.getElementById('root'))


// export default function rootLayout({ children }) {
//     return (
//         <MDXProvider
//             components={{
//                 code: (props) => <CustomCodeBlock {...props} />,
//             }}
//         >
//             {children}
//         </MDXProvider>
//     );
// }
