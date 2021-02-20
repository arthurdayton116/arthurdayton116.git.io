import * as blog2Images from './2/images'

const blogImageContent = (id) => {
    switch(id) {
        case 1:
            return '';
        case 2:
            return blog2Images;
        default:
            return 'problem'
    }
};

export default blogImageContent;
