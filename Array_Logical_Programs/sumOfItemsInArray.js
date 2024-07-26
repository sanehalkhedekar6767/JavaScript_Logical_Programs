//  2. Javascript program to print the sum of all the items of the array.


function calculateSum(arr){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + arr[i];
    }
    return sum
}
let array =  [1,2,3,4,5,6];
console.log("Sum of all the items in the array:", calculateSum(array));