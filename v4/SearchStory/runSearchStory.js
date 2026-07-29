import { preparePackageToFind } from "./OpeningMove/preparePackageToFind.js";
import { prepareRunPaths } from "./RunPaths/prepareRunPaths.js";
import { packageToFind, packageToFindRepository } from "./StoryInputs/packageToFind.js";
import { repositoriesToCheck } from "./StoryInputs/repositoriesToCheck.js";
import { searchAndCloneMatches } from "./SearchJourney/searchAndCloneMatches.js";

export async function runSearchStory(importMetaUrl) {
    const {
        packageToFindFolder,
        matchedRepositoriesFolder
    } = prepareRunPaths(importMetaUrl);

    await preparePackageToFind({
        packageToFind,
        packageToFindRepository,
        packageToFindFolder
    });

    await searchAndCloneMatches({
        packageToFind,
        repositoriesToCheck,
        matchedRepositoriesFolder
    });
}
