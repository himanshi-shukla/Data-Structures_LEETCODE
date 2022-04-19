let nums = [1, 6, 2, 2, 2, 2, 2, 2, 8, 8, 9, 7, 6, 6];
let k = 3;
function topKFrequent(nums, k) {
    if (nums.length === k) return nums;
    let frequencyMap = new Map();

    nums.forEach(element =>
        frequencyMap.set(element, frequencyMap.get(element) + 1 || 1));
    return [...frequencyMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(x => x[0])
        .slice(0, k)

}
console.log("The original array is", nums);
console.log("The top frequent elements are", topKFrequent(nums, k));