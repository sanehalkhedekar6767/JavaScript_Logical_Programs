// 12. Anagram: An anagram of a string is another string that contains the
// same characters, only the order of characters can be different.
// Define a function isAnagram ( ) with two argument and call this function by
// passing below strings. This function must return true if given strings is
// anagram else, false in case not anagram.
// ○ “listen”, “silent”
// ○ “heart”, “earth”
// ○ “debit card” , “credit card”

function isAnagram(str1, str2){
    const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }
}
const pairs = [["listen", "silent"],["heart", "earth"],["debit card","credit card"]];
pairs.forEach(pair => {
    const str1 = pair[0];
    const str2 = pair[1];

    if(isAnagram(str1, str2)){
        console.log(`"${str1}" and  "${str2}" are anagrams.`);
    }else {
        console.log(`"${str2}" and  "${str2}" are not anagrams.`);
    }

});