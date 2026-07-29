import { preparePackageToFind } from "./OpeningMove/preparePackageToFind.js";
import { prepareRunPaths } from "./OpeningMove/RunPaths/prepareRunPaths.js";
import { readPackageToFindInput } from "./OpeningMove/StoryInputs/readPackageToFindInput.js";
import { repositoriesToCheck } from "./OpeningMove/StoryInputs/repositoriesToCheck.js";
import { searchAndCloneMatches } from "./SearchJourney/searchAndCloneMatches.js";

export async function runSearchStory(importMetaUrl) {
    const {
        packageToFindInputFile,
        packageToFindFolder,
        matchedRepositoriesFolder
    } = prepareRunPaths(importMetaUrl);

    const {
        packageToFind,
        packageToFindRepository
    } = await readPackageToFindInput(packageToFindInputFile);

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
