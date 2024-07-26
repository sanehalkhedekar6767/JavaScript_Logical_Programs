// 6. Write a program for find the factorial of given number

// Method : 1 => Using Recursion
function factorial(n){
    if (n<0) {
        return -1;
    }
    if (n==0 || n==1) {
        return 1;
    }
    return n* factorial(n-1);
}
var number = 5;
var result = factorial(number);
console.log("The factorial of " + number + " is " + result);

// Method 2 : Without recursion
function factorial2(n){
    if (n<0) {
        return -1
    }
    if (n==0) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <=n; i++) {
        result = result * 1        
    }
    return result;
}
var number2 = 5;
var result2 = factorial2(number2);
console.log("The factorial of " + number2 + " is " + result2);
