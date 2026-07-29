import { cloneMatchedRepositories } from "../CloneChapter/cloneMatchedRepositories.js";
import { prepareRepositoryInspector } from "../DependencyClues/prepareRepositoryInspector.js";
import { printSearchMatches } from "../FinalScene/printSearchMatches.js";
import { readPackageJsonFromGithub } from "../GithubTrail/readPackageJsonFromGithub.js";
import { findRepositoriesUsingPackage } from "./findRepositoriesUsingPackage.js";

export async function searchAndCloneMatches({
    packageToFind,
    repositoriesToCheck,
    matchedRepositoriesFolder
}) {
    const inspectRepository = prepareRepositoryInspector({
        packageToFind,
        readPackageJson: readPackageJsonFromGithub
    });

    const matches = await findRepositoriesUsingPackage({
        repositoriesToCheck,
        inspectRepository
    });

    printSearchMatches(matches);

    await cloneMatchedRepositories({
        matches,
        destinationRoot: matchedRepositoriesFolder
    });
}
