// 12. javascript program to print Odd and Even number from an array

function printEvenOddNumbers(arr){
    let oddNumbers = [];
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (arr[i] % 2 == 0) {
            evenNumbers.push(arr[i]);

        }   else {
            oddNumbers.push(arr[i]);
        }     
    }
    console.log(('Even numbers: ', evenNumbers));
    console.log(('Odd numbers: ', oddNumbers));

}
let array =  [5,4,6,8,3,9,1,4];
console.log('Original array:', array);
console.log('Even and Odd numbers of an array :');
printEvenOddNumbers(array)