import {lazy} from "react";
import {importMDX} from "mdx.macro";

const blog1 = lazy(() => importMDX('../blogs/1/index.mdx'))
const blog2 = lazy(() => importMDX('../blogs/2/index.mdx'))

const blogContent = (id) => {
    switch(id) {
        case 1:
            return blog1;
        case 2:
            return blog2;
        default:
            return ''
    }
};

export default blogContent;
