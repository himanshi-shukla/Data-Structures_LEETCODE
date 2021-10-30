function FindingDuplicates(arr) {
    let hashTable = {}
    if (arr.length <= 1) return [];
    for (val of arr) {
        if (!hashTable[val]) {
            hashTable[val] = 1;
        }
        else {
            hashTable[val] += 1;
        }
    }
    let outputArr = [];
    for (val in hashTable) {
        if (hashTable[val] > 1) {
            outputArr.push(val);
        }
    }
    return outputArr;
}

let arr = [1, 2, 4, 6, 6, 6, 6, 7, 8, 9, 9, 10, 10]
console.log("Original array", arr);

console.log("Duplicates in the array", FindingDuplicates(arr));