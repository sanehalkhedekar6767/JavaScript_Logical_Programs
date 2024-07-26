// 8. Write a javascript program to find the prime numbers within a given range

function findPrimesInRange(start, end){
    const primes = [];
    for (let num = start; num <= end ; num++) {
        let isPrime = num > 1;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if(num%i==0){
                isPrime = false;
                break;
            }
            
        }    
        if(isPrime){
            primes.push(num);
        }    
    }
    return primes;

}
const start = 10;
const end = 50;
const primeNumbers = findPrimesInRange(start, end);
console.log("Prime numbers between " + start + " and " + end + " : " + primeNumbers.join(","));