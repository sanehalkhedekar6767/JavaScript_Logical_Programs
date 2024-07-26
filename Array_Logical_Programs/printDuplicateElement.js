// 16.Javascript Program to print the duplicate element of an array

// Method 1
function findDuplicates(array1){
    const duplicates = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = i+1; j < array1.length; j++){
            if (array1[i]==array1[j] && !duplicates.includes(array1[i])) {
                duplicates.push(array1[i]);
            
            }         
        }        
    }
    return duplicates
}
const numbers = [2,4,8,5,6,3,2,4,6,6];
const duplicateNumbers1 = findDuplicates(numbers);
console.log('Duplicate numbers:', duplicateNumbers1);


// Method 2
function findDuplicatesOptimized(array2){
    const duplicates = [];
    const frequencyMap = {}
    for (let i = 0; i < array2.length; i++) {
        const elements = array2[i]
        if (frequencyMap[elements]) {
            if (!duplicates.includes(elements)) {
                duplicates.push(elements);
            } 
                
            }else {frequencyMap[elements] = true;
            
        }     
    }
    return duplicates
}
const numbers2 = [2,4,8,5,6,3,2,4,6,6];
const duplicateNumbers2 = findDuplicatesOptimized(numbers2);
console.log('Duplicate numbers:', duplicateNumbers2);



// Method 3
function printDuplicates(arr){
    let elementCount = {};
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (elementCount[element]) {
            elementCount[element]++;
        } else {
            elementCount[element] = 1;
        }
        
    }
    for (let element in elementCount) {
        if (elementCount[element] > 1) {
            duplicates.push(element);
            
        }
    }
    if (duplicates.length > 0) {
        console.log("Duplicate elements:", duplicates);
        
    } else {
        console.log("No duplicate elements found");
    }
}
let array3 = [2,3,8,5,6,3,2,4,6,6];
printDuplicates(array3);