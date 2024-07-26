// 2.Write a javascript program to find the maximum number in an array

function findMax(arr){
    if (arr.length == 0) {
        return null;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]>max) {
            max = arr[i];   
        }
    }
    return max;
}
var numbers = [10, 5, 20, 50, 70];
var maxNumber = findMax(numbers);
console.log("Maximum number is:", +maxNumber);