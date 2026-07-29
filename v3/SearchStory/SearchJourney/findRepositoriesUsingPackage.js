export async function findRepositoriesUsingPackage({ repositoriesToCheck, inspectRepository }) {
    const matches = [];

    for (const repository of repositoriesToCheck) {
        try {
            const match = await inspectRepository(repository);

            if (match) {
                matches.push(match);
            }
        } catch {
            // Keep the search moving when a repository cannot be read.
        }
    }

    return matches;
}
