import { GET_BLOGS } from '../types';

const initialState = {
    blogs: [],
    isLoading: true
};

const blogReducers = (state = initialState, action) => {

    switch(action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.blogs,
                isLoading: action.isLoading
            }
        default:
            return state;
    }

};

export default blogReducers;