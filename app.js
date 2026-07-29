import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { runSearchStory } from "./SearchStory/runSearchStory.js";

const rootPath = dirname(fileURLToPath(import.meta.url));
const storyInput = JSON.parse(await readFile(join(rootPath, "searchStory.json"), "utf8"));

const matchedRepos = await runSearchStory({
    rootPath,
    storyInput
});

console.log(JSON.stringify(matchedRepos, null, 4));
