// 18.Javascript Program to print the elements of an array in reverse order

// Method : 1 => Using While Loop
function printArrayElementReverseWhile(arr){
    let i = arr.length - 1;
    while (i >= 0) {
        console.log(arr[i]);
        i--;
    }
}
let array = [1,2,3,4,5];
console.log('Using while loop');
printArrayElementReverseWhile(array);

// Method : 2 => Using Do While Loop
function printArrayElementReverseDoWhile(arr){
    let i = arr.length - 1;
    if (i<0) return  
    do {
        console.log(arr[i]);
        i--;
    } while (i>=0);

}
let array2  = [1,2,4,5,6];
console.log('Using do...while loop');
printArrayElementReverseDoWhile(array2)

// Method : 3 => Using For Loop
function printArrayElementReverseFor(arr){
    for (let i = arr.length-1; i>=0; i--) {
        console.log(arr[i]);
        
    }
}
let array3 = [1,2,5,7,9];
console.log('Using for loop');
printArrayElementReverseFor(array3);

// Method : 4 => Using For Each Loop

function printArrayElementReverseForEach(arr){
    arr.slice().reverse().forEach(function(element){
        console.log(element);
    });
}
let array4 = [2,4,6,3,7,1];
console.log('Using forEach loop');
printArrayElementReverseForEach(array4)


