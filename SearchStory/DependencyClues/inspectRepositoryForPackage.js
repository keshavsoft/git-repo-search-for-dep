import { findPackageVersion } from "./findPackageVersion.js";

export async function inspectRepositoryForPackage({ repository, packageToFind, readPackageJson }) {
    console.log(`Checking ${repository.repo}`);

    const packageJson = await readPackageJson(repository);

    if (typeof packageJson === "string") {
        console.log(`No package.json found in ${repository.repo}`);
        return null;
    }

    const version = findPackageVersion({ packageJson, packageToFind });

    if (!version) {
        console.log(`${repository.repo}: package not referenced`);
        return null;
    }

    return {
        owner: repository.owner,
        repo: repository.repo,
        branch: repository.branch,
        version
    };
}
