import axios from 'axios';
import { configs } from '../utils/configs';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

api.defaults.headers.common['Accept'] = 'application/vnd.github+json'
api.defaults.headers.common['X-GitHub-Api-Version'] = '2022-11-28'

const token = configs.getGithubToken()
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export interface GithubProfile {
    name: string,
    avatar_url: string,
    bio: string,
    company: string,
    created_at: string,
    followers: number,
    html_url: string,
    login: string
}

export const gitHubApi = {
  getProfile: async function(username: string) {
    try {
      const ghProfile = await api.get<GithubProfile>(`/users/${username}`)
      return ghProfile.data

    } catch(error) {
      console.error(error)
      throw new Error(`Não foi possível carregar o perfil do ${username}`)
    }
  }
}