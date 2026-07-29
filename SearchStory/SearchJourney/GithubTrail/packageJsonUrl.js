export function packageJsonUrl({ owner, repo, branch }) {
    return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/package.json`;
}
