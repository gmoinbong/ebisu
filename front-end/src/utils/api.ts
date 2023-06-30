import { FilterOptions } from '../redux/thunks/filterThunk';
import axios from "axios";

const instance = axios.create({
  baseURL: 'https://ebisu-backend.onrender.com/api'
})

export const getClothesByGender = async (gender: string) => {
  try {
    const res = await instance.get('/Clothes', {
      params: {
        gender: gender
      }
    })
    return res
  } catch (error) {
    console.error(error)
    throw new Error('An error occurred while fetching clothes by gender.');
  }
}

export const getClothesByName = async (name: string) => {
  try {
    const res = await instance.get('/Clothes', {
      params: {
        name: name
      }
    })
    return res
  }
  catch (error) {
    console.error(error)
    throw new Error('An error occurred while fetching clothes by search.');
  }
}

export const getClothesBySearch = async (search: string) => {
  try {
    const res = await instance.get('/Clothes', {
      params: {
        search: search
      }
    })
    return res
  } catch (error) {
    console.error(error)
    throw new Error('An error occurred while fetching clothes by search.');
  }
}

export const getClothesByFilter = async (options: FilterOptions) => {
  if (Object.keys(options).length === 0) {
    return [];
  }
  try {
    const queryParams = Object.entries(options)
      .flatMap(([key, value]) => {
        if (Array.isArray(value)) {
          return value.map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`);
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join('&');
    const query = `?${queryParams}`;
    const response = await instance.get(`/Clothes${query}`);
    const filteredProducts = response.data;
    return filteredProducts;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
};

