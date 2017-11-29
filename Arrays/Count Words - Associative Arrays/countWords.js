const sentence = 'Hello, how are you? Hello, are you doing well? Some BLA bLa!!';

const occurrences = {};

// remove all non-word characters:
const onlyWords = sentence.split(/\W/g);

for (const word of onlyWords) {
    const wordToLower = word.toLowerCase();

    if (wordToLower === '') {
        continue;
    }

    if (occurrences[wordToLower] === undefined ) {
        occurrences[wordToLower] = [];
    }

    if (occurrences[wordToLower].includes(word)) {
        continue;
    }
    occurrences[wordToLower].push(word);
}

console.log(occurrences);

