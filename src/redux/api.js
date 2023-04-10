import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

// 
export const fetchProducts = async () => axios.get(`${BASE_URL}/products`);

export const fetchProductsById = async (productId) => axios.get(`${BASE_URL}/products/${productId}`);

export const createUsers = async (userData) => {
  const data = {
    email: userData.email,
    username: userData.userName,
    password: userData.password,
    name: {
      firstname: userData.firstName,
      lastname: userData.lastName
    }
  };
  const options = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  return axios.post(`${BASE_URL}/users`, data, options)
};

export const loginUsers = async (userData) => {
  const data = {
    username: userData.userName,
    password: userData.password
  };

  console.log(data);

  const options = {
    headers: {
      'Content-Type': 'application/json',
    }
  };


  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })


  //"username\":\"bibekkotal\",\"password\":\"Bibek@2\



  console.log('res:--- ', JSON.stringify(res, null, 1))



  // return axios.post(`${BASE_URL}/auth/login`, data, options)
};


//getUserById

export const getUserById = async (productId) => axios.get(`${BASE_URL}/products/${productId}`);