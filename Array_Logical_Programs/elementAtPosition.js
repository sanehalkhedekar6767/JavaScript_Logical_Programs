// 20.Javascript Program to print the element of an array present on Odd position.

function printElementAtOddPositions(arr){
    for (let i = 0; i < arr.length; i=i+2) {
        console.log(arr[i]);        
    }
}
let array = [1,5,6,2,8,4,3,9,5,7,6];
console.log('Elements at odd position in an array');
printElementAtOddPositions(array)