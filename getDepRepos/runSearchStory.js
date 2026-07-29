import { readPackageToFindInput } from "./OpeningMove/StoryInputs/readPackageToFindInput.js";
import { repositoriesToCheck } from "./OpeningMove/StoryInputs/repositoriesToCheck.js";
import { findSearchMatches } from "./SearchJourney/findSearchMatches.js";

export async function runSearchStory({
    storyInput
}) {
    const {
        packageToFind
    } = readPackageToFindInput(storyInput.packageToFind);

    return findSearchMatches({
        packageToFind,
        repositoriesToCheck
    });
}
