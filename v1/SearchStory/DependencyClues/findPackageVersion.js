import { collectDependencies } from "./collectDependencies.js";

export function findPackageVersion({ packageJson, packageToFind }) {
    const dependencies = collectDependencies(packageJson);

    return dependencies[packageToFind];
}
