function primeNum(num) {
    let n = +num,
        isPrime;

    for (let i = n; i >= 2; i -= 1) {
        isPrime = true;
        for (let j = 2; j <= Math.sqrt(n); j += 1) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
            break;
        }
    }
}

primeNum(13);