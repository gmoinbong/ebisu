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
