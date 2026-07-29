export function readPackageToFindInput(packageToFindInput) {
    const packageToFind = packageToFindInput.name;

    return {
        packageToFind,
        packageToFindRepository: {
            owner: packageToFindInput.owner,
            repo: packageToFind,
            branch: packageToFindInput.branch
        }
    };
}
