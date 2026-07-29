import { guardPackageToFind } from "./guardPackageToFind.js";

export function readPackageToFindInput(packageToFindInput) {
    const packageToFind = packageToFindInput.name;
    guardPackageToFind(packageToFind);

    return {
        packageToFind
    };
}
