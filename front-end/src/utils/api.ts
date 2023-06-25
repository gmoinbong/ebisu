import { FilterOptions } from '../redux/thunks/filterThunk';
import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5172/api/'
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
  try {
    const queryParams = Object.entries(options)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return value.map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`);
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .flat()
      .join('&');
    const query = `?/${queryParams}`;

    const response = await instance.get(`/Clothes${query}`);
    const filteredProducts = response.data;
    return filteredProducts;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
};
