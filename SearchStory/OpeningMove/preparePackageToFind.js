import { cloneRepository } from "../CloneChapter/cloneMatchedRepositories.js";
import { guardPackageToFind } from "../StoryInputs/guardPackageToFind.js";

export async function preparePackageToFind({
    packageToFind,
    packageToFindRepository,
    packageToFindFolder
}) {
    guardPackageToFind(packageToFind);

    await cloneRepository({
        repository: packageToFindRepository,
        destinationRoot: packageToFindFolder
    });
}
