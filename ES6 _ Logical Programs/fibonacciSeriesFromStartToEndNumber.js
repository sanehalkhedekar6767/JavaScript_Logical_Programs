// 10. Write a javascript program to generate the fibonacci series from a starting
// number to an ending number 


function fibonacciSeries(start, end){
    let n1 = 0, n2 = 1, nextTerm;
    let fibonacci = [];
    while (n1 <= end) {
        if (n1>=start) {
            fibonacci.push(n1);
        }
        nextTerm = n1 + n2;
        n1 = n2; 
        n2 = nextTerm; 
    }
    return fibonacci
}
const startNumber = 10;
const endNumber = 100;
const fibonacciSequence = fibonacciSeries(startNumber, endNumber);
console.log("Fibonacci series between " + startNumber + " and " + endNumber + " : " + fibonacciSequence.join(" , "));
