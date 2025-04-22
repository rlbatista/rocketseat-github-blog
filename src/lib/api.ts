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

export interface GithubIssuesItem {
  title: string,
  number: number,
  body: string,
  created_at: Date
}

export interface GithubIssues {
  items: GithubIssuesItem[]
}

export const gitHubApi = {
  getProfile: async function() {
    try {
      const ghProfile = await api.get<GithubProfile>(`/users/${configs.getGithubAccount()}`)
      return ghProfile.data

    } catch(error) {
      console.error(error)
      throw new Error(`Não foi possível carregar o perfil do ${configs.getGithubAccount()}`)
    }
  },

  getIssues: async function(query: string = ' ') {
    try {
      const ghIssues = await api.get<GithubIssues>(`/search/issues`, {
        params: {
          'q': `${query}repo:${configs.getGithubAccount()}/${configs.getGithubRepo()}`
        }
      })
      return ghIssues.data

    } catch(error) {
      console.error(error)
      throw new Error(`Não foi possível carregar as issues do repo ${configs.getGithubAccount()}/${configs.getGithubRepo()}`)
    }
  }
}