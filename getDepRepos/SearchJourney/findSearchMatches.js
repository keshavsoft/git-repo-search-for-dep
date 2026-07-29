import { prepareRepositoryInspector } from "./DependencyClues/prepareRepositoryInspector.js";
import { readPackageJsonFromGithub } from "./GithubTrail/readPackageJsonFromGithub.js";
import { findRepositoriesUsingPackage } from "./findRepositoriesUsingPackage.js";

export async function findSearchMatches({
    packageToFind,
    repositoriesToCheck
}) {
    const inspectRepository = prepareRepositoryInspector({
        packageToFind,
        readPackageJson: readPackageJsonFromGithub
    });

    return findRepositoriesUsingPackage({
        repositoriesToCheck,
        inspectRepository
    });
}
