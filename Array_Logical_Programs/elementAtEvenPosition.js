// 19.Javascript Program to print the element of an array present on even position.

function printElementAtEvenPositions(arr){
    for (let i = 1; i < arr.length; i=i+2) {
        console.log(arr[i]);        
    }
}
let array = [1,5,6,2,8,4,3,9,5,7,6];
console.log('Elements at even position in an array');
printElementAtEvenPositions(array)