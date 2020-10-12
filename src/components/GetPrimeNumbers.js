function isPrime(numberToCheck) {
  //Try to convert the argument to Number, expects NaN if the input is invalid
  numberToCheck = Number(numberToCheck);

  //If the input is NaN or it contains decimals greater 0, return false,
  // Example 23.6 is not a prime number hence return false
  if (isNaN(numberToCheck) || !Number.isInteger(numberToCheck)) {
    return false;
  } else {
    for (let i = 2; i < numberToCheck; i++) {
      // console.log(`${numberToCheck} / ${i} = ${numberToCheck / i} rem ${numberToCheck % i}`)
      if (numberToCheck % i === 0) {
        return false;
      }
    }
  }
  return true;
}

function getPrimeNumbers(number) {
  const arrayOfPrime = [];
  number = Number(number);
  for (let p = 2; p <= number; p++) {
    if (isPrime(p)) arrayOfPrime.push(p);
  }

  return arrayOfPrime;
}

function getPrimeProduct(primeNumber) {
  const primes = getPrimeNumbers(primeNumber);
  const primeProducts = []; //= [primes];
  /*
   * The getPrimeNumbers() function returns an array,
   * We first add the array as the first element in the primeProducts Array.
   * primeProduct is going to be an array of arrays,
   * But the first element will be the array returned from the getPrimeNumbers()
   */
  primes.forEach((firstPrime, index) => {
    /*
     * Knowing that there is an array element occuplying the index 0 in the primeProduct array
     * I therefore added 1 to the index of the new element(array) into the primeProduct array
     * The first element of the new element(array) coming into the primeProduct Array will be
     * the element on the current iteration
     * For example
     * primes = getPrimeNumbers(5)// [2,3,5]
     * primeProducts = [
     *                   [2,3,5]
     *                   [2, ]
     *                   [3, ]
     *                   [5, ]
     *                 ]
     * index += 1;
     * primeProducts[index] = [firstPrime];
     */
    /*
     * The remaining Elements for the arrays will be calculated using another for loop
     *primeProducts[index] = primes.map((num, index) => num * firstPrime);
     */
  });
  primes.forEach((prime, index) => {
    //index += 1;
    primeProducts[index] = [prime];

    primes.forEach((p, i) => {
      primeProducts[index].push(Number(p) * prime);
    });
  });

  return primeProducts;
}

//console.log(getPrimeProduct(7));
module.exports = { isPrime, getPrimeNumbers, getPrimeProduct };
//console.log(primeProduct(10));

//function primeProduct(primeNumber) {

//     primes = getPrimeNumbers(primeNumber);
//     product = [primes];
//     primes.forEach(prime => {

//         product[prime] = [prime];

//         primes.forEach(p => {
//             product[prime].push(Number(p) * prime);
//         });
//     });

//     return product;
// }
//console.log(getPrimeNumbers(10));

//console.log(getPrimeNumbers(19));
