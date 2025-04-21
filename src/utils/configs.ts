class Configs {
    private githubAccount: string
    private githubToken: string

    constructor() {
        this.githubAccount = import.meta.env.VITE_GITHUB_ACCOUNT || undefined
        this.githubToken = import.meta.env.VITE_GITHUB_TOKEN || undefined

        if(!this.githubAccount) {
            throw new Error('Environmnet variable githubAccout has not been defined')
        }
    }

    public getGithubAccount(): string {
        return this.githubAccount
    }

    public getGithubToken(): string {
        return this.githubToken
    }
}

export const configs = new Configs()