const getPermutations = (arr) => {
    const generatePermutations = (index, current, used, source, permutations) => {
        if (index === source.length) {
            permutations.push([...current]);
            return;
        }

        for (let i = 0; i < source.length; i += 1) {
            if (used[i]) {
                continue;
            }
            const next = source[i];
            current[index] = next;
            // set visited to true
            used[i] = true;
            generatePermutations(index + 1, current, used, source, permutations);
            // all visited are true, and now we go back and set the first to false;
            used[i] = false;
        }
    };
    const permutations = [];
    generatePermutations(0, [], {}, arr, permutations);
    return permutations;
};

getPermutations([1, 2, 3])
    .forEach((perm) => console.log(perm));
