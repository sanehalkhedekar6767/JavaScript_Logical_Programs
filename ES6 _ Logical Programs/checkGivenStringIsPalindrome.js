// 3. Write a program to check if the given string is palindrome

// Method : 1
function isPalindrome(str){
    return str == str.split('').reverse().join('');
}
var inputString = 'abcabc';
if (isPalindrome(inputString)) {
    console.log("The string '"+ inputString + "'is a palindrome.");
} else {
    console.log("The string '" + inputString + "'is not a palindrome.");
}

// Method : 2
function isPalindrome2(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    return str == str.split('').reverse().join('');
}
var inputString = "A man, a plan, a canal, Panama!";
console.log("Is the string is palindrome?" +isPalindrome2(inputString));