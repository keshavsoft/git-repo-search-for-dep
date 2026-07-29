import { packageJsonUrl } from "./packageJsonUrl.js";
import { readFromGithub } from "./readFromGithub.js";

export async function readPackageJsonFromGithub(repository) {
    return readFromGithub(packageJsonUrl(repository));
}
