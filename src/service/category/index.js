import axios from 'axios';

let BASE_URL = 'http://localhost:8080';
// BASE_URL = process.env.REACT_APP_BASE_URL;
const baseAPI = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});

export const CategoryService = {
    getCategories: async () => {
        try {
            const res = await baseAPI.get(`api/v1/interviewer/category`);
            return res.data.data || [];
        } catch (err) {
            console.log('Category 전체 조회 실패');
            return [];
        }
    },
};
