export function guardPackageToFind(packageToFind) {
    if (typeof packageToFind !== "string") {
        throw new Error("packageToFind must be a string");
    }

    const trimmedPackageToFind = packageToFind.trim();

    if (!trimmedPackageToFind) {
        throw new Error("packageToFind cannot be empty");
    }

    if (trimmedPackageToFind !== packageToFind) {
        throw new Error("packageToFind cannot start or end with spaces");
    }

    return packageToFind;
}
