import { dirname, join } from "path";
import { fileURLToPath } from "url";

export function prepareRunPaths(importMetaUrl) {
    const appRoot = dirname(fileURLToPath(importMetaUrl));

    return {
        packageToFindInputFile: join(appRoot, "packageToFind.json"),
        packageToFindFolder: join(appRoot, "PackageToFind"),
        matchedRepositoriesFolder: join(appRoot, "MatchedRepositories")
    };
}
