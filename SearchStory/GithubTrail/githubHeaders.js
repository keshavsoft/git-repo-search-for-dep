const githubToken = process.env.GITHUB_TOKEN;

export const githubHeaders = {
    "Accept": "application/vnd.github+json",
    "Authorization": `Bearer ${githubToken}`,
    "User-Agent": "github-list-dependents"
};
