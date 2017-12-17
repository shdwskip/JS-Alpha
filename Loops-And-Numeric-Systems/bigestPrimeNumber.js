function solve(N) {
    for (let number = N; number >= 2; number -= 1) {
        let isPrime = true;
        for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
            if (number % divider === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(number);
            break;
        }
    }
}

solve(1048576);
