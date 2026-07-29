import { access, mkdir } from "fs/promises";
import { constants } from "fs";
import { spawn } from "child_process";
import path from "path";

function repositoryUrl({ owner, repo }) {
    return `https://github.com/${owner}/${repo}.git`;
}

async function pathExists(targetPath) {
    try {
        await access(targetPath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

function runGitClone({ repository, destination }) {
    return new Promise((resolve, reject) => {
        const args = [
            "clone",
            repositoryUrl(repository),
            destination
        ];

        if (repository.branch) {
            args.splice(1, 0, "--branch", repository.branch);
        }

        const git = spawn("git", args, {
            stdio: "inherit"
        });

        git.on("error", reject);
        git.on("close", code => {
            if (code === 0) {
                resolve();
                return;
            }

            reject(new Error(`git clone failed for ${repository.repo} with exit code ${code}`));
        });
    });
}

export async function cloneRepository({
    repository,
    destinationRoot
}) {
    await mkdir(destinationRoot, { recursive: true });

    const destination = path.join(destinationRoot, repository.repo);

    if (await pathExists(destination)) {
        console.log(`Already cloned ${repository.repo} at ${destination}`);
        return;
    }

    console.log(`Cloning ${repository.repo} to ${destination}`);
    await runGitClone({
        repository,
        destination
    });
}

export async function cloneMatchedRepositories({
    matches,
    destinationRoot
}) {
    if (!destinationRoot) {
        throw new Error("destinationRoot is required for cloning matched repositories");
    }

    await mkdir(destinationRoot, { recursive: true });

    for (const match of matches) {
        await cloneRepository({
            repository: match,
            destinationRoot
        });
    }
}
