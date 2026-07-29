export function parseJsonWhenPossible(body) {
    try {
        return JSON.parse(body);
    } catch {
        return body;
    }
}
