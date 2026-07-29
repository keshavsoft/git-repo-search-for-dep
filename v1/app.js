import { packageToFind } from "./SearchStory/packageToFind.js";
import { repositoriesToCheck } from "./SearchStory/repositoriesToCheck.js";
import { readPackageJsonFromGithub } from "./SearchStory/readPackageJsonFromGithub.js";
import { prepareRepositoryInspector } from "./SearchStory/prepareRepositoryInspector.js";
import { findRepositoriesUsingPackage } from "./SearchStory/findRepositoriesUsingPackage.js";
import { printSearchMatches } from "./SearchStory/printSearchMatches.js";

const inspectRepository = prepareRepositoryInspector({
    packageToFind,
    readPackageJson: readPackageJsonFromGithub
});

const matches = await findRepositoriesUsingPackage({
    repositoriesToCheck,
    inspectRepository
});

printSearchMatches(matches);
