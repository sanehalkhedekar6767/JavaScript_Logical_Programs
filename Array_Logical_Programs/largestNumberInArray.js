// 8. Javascript find the largest number in an array

function findLargestNumber(arr){
    if (arr.length === 0) {
        return "Array is empty";
    }
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
let array = [5,8,3,6,9,2,7,4]
console.log('Largest number in the array:', findLargestNumber(array));