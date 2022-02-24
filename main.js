let nums = [1, 2, 3, 1, 1, 1, 3, 3, 3, 3, 4, 5, 4, 2]
const k = 3

function topKFrequent(nums, k) {
    if (nums.lenth === k) return nums;
    let frequencyMap = new Map();

    nums.forEach(element =>
        frequencyMap.set(element, frequencyMap.get(element) + 1 || 1));
    return [...frequencyMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(x => x[0])
        .slice(0, k);

}
console.log('the original array is', nums)
console.log('The top frequent' + k + 'elements are', topKFrequent(nums, k));