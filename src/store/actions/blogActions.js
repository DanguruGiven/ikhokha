import { GET_BLOGS } from '../types';
import data from '../../data/blogs.json';
// import axios from 'axios';

export const setBlogs = (blogs, isLoading) => ({
    type: GET_BLOGS,
    blogs,
    isLoading
});

export const fetchBlogs = () => async dispatch => {
    await dispatch(setBlogs(data?.blogs, false));
}