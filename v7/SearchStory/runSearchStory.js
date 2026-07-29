import { preparePackageToFind } from "./OpeningMove/preparePackageToFind.js";
import { prepareRunPaths } from "./OpeningMove/RunPaths/prepareRunPaths.js";
import { readPackageToFindInput } from "./OpeningMove/StoryInputs/readPackageToFindInput.js";
import { repositoriesToCheck } from "./OpeningMove/StoryInputs/repositoriesToCheck.js";
import { searchAndCloneMatches } from "./SearchJourney/searchAndCloneMatches.js";

export async function runSearchStory({
    rootPath,
    storyInput
}) {
    const {
        packageToFindFolder,
        matchedRepositoriesFolder
    } = prepareRunPaths({
        rootPath,
        pathsInput: storyInput.paths
    });

    const {
        packageToFind,
        packageToFindRepository
    } = readPackageToFindInput(storyInput.packageToFind);

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
