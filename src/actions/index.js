import axios from 'axios';

export const fetchPosts = () => async dispatch => {
    const response = await axios.get('http://localhost:8000/api/posts/');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data,
    });
};
