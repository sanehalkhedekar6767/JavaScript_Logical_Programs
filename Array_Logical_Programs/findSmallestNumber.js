// 10. Javascript program to find the smallest number in an array

function findSmallestNumber(arr){
    if (arr.length == 0) {
        return "Array is empty"
    }
    let smallest = arr[0];
    for (let i = 1; i < array.length; i++) {
        if (arr[i] <  smallest) {
            smallest = arr[i];
        }
        
    }
    return smallest;
}
let array = [5,4,6,8,3,9,1,4];
console.log('Smmallest number in the array :', findSmallestNumber(array));