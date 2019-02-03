class GitHub {
    constructor() {
        this.client_id = '9e65fa22d56f0946ae8d';
        this.client_secret = '6b0183b7e6d93a6595a782a413b77c916b0d1252';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileReponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoReponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileReponse.json();
        const repos = await repoReponse.json();

        return {
            profile,
            repos
        }
    }
}