// frontend/src/services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

export const getProducts = async () => {
    return axios.get(API_URL);
};

export const createProduct = async (productData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return axios.post(API_URL, productData, config);
};
