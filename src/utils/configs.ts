class Configs {
    private githubAccount: string
    private githubToken: string
    private githubRepo: string

    constructor() {
        this.githubAccount = import.meta.env.VITE_GITHUB_ACCOUNT || undefined
        this.githubToken = import.meta.env.VITE_GITHUB_TOKEN || undefined
        this.githubRepo = import.meta.env.VITE_GITHUB_REPO || undefined

        if(!this.githubAccount) {
            throw new Error('Environmnet variable githubAccout has not been defined')
        }

        if(!this.githubRepo) {
            throw new Error('Environment variable githubRepo has not been defined')
        }
    }

    public getGithubAccount(): string {
        return this.githubAccount
    }

    public getGithubToken(): string {
        return this.githubToken
    }

    public getGithubRepo() {
        return this.githubRepo
    }
}

export const configs = new Configs()