const generateVariationsWithoutRep = (n, k, index, variation, used, allVariations) => {
    if (index === k) {
        allVariations.push([...variation]);
        return;
    }

    for (let i = 0; i < n; i += 1) {
        if (used[i]) {
            // with repetition:
            // continue;
        }

        variation[index] = i + 1;
        used[i] = true;
        generateVariationsWithoutRep(n, k, index + 1, variation, used, allVariations);
        used[i] = false;
    }
};

const n = 4;
const k = 3;
const variation = Array.from({
    length: k,
});
const used = Array.from({
    length: n,
});
const allVariations = [];
generateVariationsWithoutRep(n, k, 0, variation, used, allVariations);
allVariations.forEach((variate) => console.log(variate.join(' ')));

