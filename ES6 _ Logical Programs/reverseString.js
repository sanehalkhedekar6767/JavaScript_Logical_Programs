// 4 .Write a program for reverse a given string.


function reverseString(str){
    return str.split('').reverse().join('');

}
var inputString = "Hello World!";
var reversedString = reverseString(inputString);
console.log("The reversed string is:" + reversedString);