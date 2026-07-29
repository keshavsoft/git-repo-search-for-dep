import { packageToFind } from "./SearchStory/StoryInputs/packageToFind.js";
import { repositoriesToCheck } from "./SearchStory/StoryInputs/repositoriesToCheck.js";
import { readPackageJsonFromGithub } from "./SearchStory/GithubTrail/readPackageJsonFromGithub.js";
import { prepareRepositoryInspector } from "./SearchStory/DependencyClues/prepareRepositoryInspector.js";
import { findRepositoriesUsingPackage } from "./SearchStory/SearchJourney/findRepositoriesUsingPackage.js";
import { printSearchMatches } from "./SearchStory/FinalScene/printSearchMatches.js";

const inspectRepository = prepareRepositoryInspector({
    packageToFind,
    readPackageJson: readPackageJsonFromGithub
});

const matches = await findRepositoriesUsingPackage({
    repositoriesToCheck,
    inspectRepository
});

printSearchMatches(matches);
