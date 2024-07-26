// 14. Javascript program to find the frequency of each element in the array

let array = [1,2,2,3,3,3,4,4,4,4];
let frequency = {};
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (frequency[element]) {
        frequency[element]++;
    } else {
        frequency[element] = 1;
    }
    
}
console.log(frequency);