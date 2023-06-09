import api from '../api';


const getComments = async () => {
    const res = await api.get('api/comments');
    return res.data
}

export default getComments;