import { findPackageVersion } from "./findPackageVersion.js";

export async function inspectRepositoryForPackage({ repository, packageToFind, readPackageJson }) {
    const packageJson = await readPackageJson(repository);

    if (typeof packageJson === "string") {
        return null;
    }

    const version = findPackageVersion({ packageJson, packageToFind });

    if (!version) {
        return null;
    }

    return {
        owner: repository.owner,
        repo: repository.repo,
        branch: repository.branch,
        version
    };
}
