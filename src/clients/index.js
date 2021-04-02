import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_URL_API
});

api.interceptors.request.use((config) => {
  config.headers.Authorization =  process.env.REACT_APP_AUTHENTICATION_GIT_HUB
  return config;
});

const getByUser = async (user) => {
    return api.get(`users/${user}`);
}

const getReposByUser = async (user) => {
    return api.get(`users/${user}/repos`);
}

export {
    getByUser,
    getReposByUser
}