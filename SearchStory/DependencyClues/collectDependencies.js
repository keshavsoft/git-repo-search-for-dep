export function collectDependencies(packageJson) {
    return {
        ...(packageJson.dependencies || {}),
        ...(packageJson.devDependencies || {})
    };
}
