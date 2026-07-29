import { dirname, join } from "path";
import { fileURLToPath } from "url";

export function prepareRunPaths(importMetaUrl) {
    const appRoot = dirname(fileURLToPath(importMetaUrl));

    return {
        packageToFindFolder: join(appRoot, "PackageToFind"),
        matchedRepositoriesFolder: join(appRoot, "MatchedRepositories")
    };
}
