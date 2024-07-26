// 9. Javascript program to find 2nd smallest number in an array

function findSecondSmallest(arr){
    if (arr.length < 2) {
        return "Array doesn't have enough elements";
    }
    let smallest = arr[0];
    let secondSmallest = arr[1];
    if (secondSmallest< smallest) {
        [smallest, secondSmallest] = [secondSmallest, smallest];

    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i]<smallest) {
            secondSmallest = smallest;
            smallest =arr[i];
        }else if (arr[i]< secondSmallest && arr[i] != smallest) {
                secondSmallest = arr[i];
        }
        
    }
    return secondSmallest
}
let array = [5,4,6,8,3,9,1,4];
console.log('Second smallest number in an array :', findSecondSmallest(array));