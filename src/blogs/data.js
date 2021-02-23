import data from '../blogs/data.json';

const postData = (id) => {
    return data.filter((obj) => {
        return obj.id === id
    })[0]
}

export default postData;
