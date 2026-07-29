import { preparePackageToFind } from "./OpeningMove/preparePackageToFind.js";
import { prepareRunPaths } from "./OpeningMove/RunPaths/prepareRunPaths.js";
import { packageToFind, packageToFindRepository } from "./OpeningMove/StoryInputs/packageToFind.js";
import { repositoriesToCheck } from "./OpeningMove/StoryInputs/repositoriesToCheck.js";
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
