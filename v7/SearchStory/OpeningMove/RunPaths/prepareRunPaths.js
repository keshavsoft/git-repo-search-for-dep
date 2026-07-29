import { isAbsolute, join } from "path";

function fromRoot(rootPath, targetPath) {
    if (isAbsolute(targetPath)) {
        return targetPath;
    }

    return join(rootPath, targetPath);
}

export function prepareRunPaths({
    rootPath,
    pathsInput
}) {
    return {
        packageToFindFolder: fromRoot(rootPath, pathsInput.packageToFindFolder),
        matchedRepositoriesFolder: fromRoot(rootPath, pathsInput.matchedRepositoriesFolder)
    };
}
