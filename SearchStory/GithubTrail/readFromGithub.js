import https from "https";
import { githubHeaders } from "./githubHeaders.js";
import { parseJsonWhenPossible } from "./parseJsonWhenPossible.js";

export async function readFromGithub(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: githubHeaders }, response => {
            let body = "";

            response.on("data", chunk => {
                body += chunk;
            });

            response.on("end", () => {
                resolve(parseJsonWhenPossible(body));
            });
        }).on("error", reject);
    });
}
