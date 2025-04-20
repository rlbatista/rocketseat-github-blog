import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

api.defaults.headers.common['Accept'] = 'application/vnd.github+json'
api.defaults.headers.common['X-GitHub-Api-Version'] = '2022-11-28'

const token = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
