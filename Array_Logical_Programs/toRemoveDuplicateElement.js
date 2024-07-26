// 11. Javascript program to remove the duplicate element in an array
 function removeDuplicate(arr){
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
       if (uniqueArray.indexOf(arr[i])== -1) {
        uniqueArray.push(arr[i])
       }
    }
    return uniqueArray
 }
 let array = [5,4,6,8,3,9,1,4];
 console.log("Original Array:", array);
 let uniqueArray = removeDuplicate(array);
 console.log("After removing duplicates:" , uniqueArray);