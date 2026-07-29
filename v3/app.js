import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { packageToFind, packageToFindRepository } from "./SearchStory/StoryInputs/packageToFind.js";
import { guardPackageToFind } from "./SearchStory/StoryInputs/guardPackageToFind.js";
import { repositoriesToCheck } from "./SearchStory/StoryInputs/repositoriesToCheck.js";
import { readPackageJsonFromGithub } from "./SearchStory/GithubTrail/readPackageJsonFromGithub.js";
import { prepareRepositoryInspector } from "./SearchStory/DependencyClues/prepareRepositoryInspector.js";
import { findRepositoriesUsingPackage } from "./SearchStory/SearchJourney/findRepositoriesUsingPackage.js";
import { printSearchMatches } from "./SearchStory/FinalScene/printSearchMatches.js";
import { cloneMatchedRepositories, cloneRepository } from "./SearchStory/CloneChapter/cloneMatchedRepositories.js";

const appRoot = dirname(fileURLToPath(import.meta.url));
const packageToFindFolder = join(appRoot, "PackageToFind");
const matchedRepositoriesFolder = join(appRoot, "MatchedRepositories");

guardPackageToFind(packageToFind);

await cloneRepository({
    repository: packageToFindRepository,
    destinationRoot: packageToFindFolder
});

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
