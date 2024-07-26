// 13.Javascript Program to copy all elements from one array into another array

// Method 1
let array1 = [1,2,3,4,5];
let newArray = [];
for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);    
}
console.log(newArray);

// Method 2
let array2 = [1,2,3,4,5];
let newArray2 = array2.slice();
console.log(newArray2);

// Method 3
let array3 = [1,2,3,4,5];
let newArray3 = [...array3];
console.log(newArray3);