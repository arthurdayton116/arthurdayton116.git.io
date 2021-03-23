import {lazy} from "react";
import {importMDX} from "mdx.macro";

const blog1 = lazy(() => importMDX('../blogs/1/index.mdx'))
const blog2 = lazy(() => importMDX('../blogs/2/index.mdx'))
const blog3 = lazy(() => importMDX('../blogs/3/index.mdx'))
const blog4 = lazy(() => importMDX('../blogs/4/index.mdx'))

const blogContent = (id) => {
    switch(id) {
        case 1:
            return blog1;
        case 2:
            return blog2;
        case 3:
            return blog3;
        case 4:
            return blog4;
        default:
            return 'YOU FORGOT TO ADD BLOG TO Blog.MDX.js'
    }
};

export default blogContent;
