// 17.Javascript Program to print the elements of an array


// Method : 1 => Using For Loop
function printArrayElements(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        
    }
}
let array = [1,2,3,4,5];
printArrayElements(array);

// Method : 2 => Using While Loop
function printArrayElementsWhile(arr){
    let i = 0;
    while (i<arr.length) {
        console.log(arr[i]);
        i++;
    }
}
let array2 = [1,2,3,4,5];
console.log('Using while loop');
printArrayElementsWhile(array2)

// Method : 3 → Using Do While Loop
function printArrayElementsDoWhile(arr){
    let i = 0;
    do {
        console.log(arr[i]);
        i++;
    } while (i<arr.length);
}
let array3 = [1,2,3,4,5];
console.log('Using do...while loop');
printArrayElementsDoWhile(array3);

// Method : 4 => Using ForEach Loop
function printArrayElementsForEach(arr){
    arr.forEach(function(element){
        console.log(element);
    });

}
let array4 = [1,2,3,4,5];
console.log('Using forEach loop');
printArrayElementsForEach(array4)

