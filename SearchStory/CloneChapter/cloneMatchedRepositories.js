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
        const git = spawn("git", [
            "clone",
            "--branch",
            repository.branch,
            repositoryUrl(repository),
            destination
        ], {
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

export async function cloneMatchedRepositories({
    matches,
    destinationRoot = "MatchedRepositories"
}) {
    await mkdir(destinationRoot, { recursive: true });

    for (const match of matches) {
        const destination = path.join(destinationRoot, match.repo);

        if (await pathExists(destination)) {
            console.log(`Already cloned ${match.repo} at ${destination}`);
            continue;
        }

        console.log(`Cloning ${match.repo} to ${destination}`);
        await runGitClone({
            repository: match,
            destination
        });
    }
}
