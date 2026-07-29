import { readFile } from "fs/promises";

export async function readPackageToFindInput(packageToFindInputFile) {
    const input = JSON.parse(await readFile(packageToFindInputFile, "utf8"));
    const packageToFind = input.packageToFind;

    return {
        packageToFind,
        packageToFindRepository: {
            owner: input.owner,
            repo: packageToFind,
            branch: input.branch
        }
    };
}
