import { inspectRepositoryForPackage } from "./inspectRepositoryForPackage.js";

export function prepareRepositoryInspector({ packageToFind, readPackageJson }) {
    return repository => inspectRepositoryForPackage({
        repository,
        packageToFind,
        readPackageJson
    });
}
