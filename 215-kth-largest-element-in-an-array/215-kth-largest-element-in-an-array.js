/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // nums.sort((a,b) => b - a);
    // return nums[k-1];
    let sorted = mergeSort(nums);
    console.log(sorted)
    return sorted[k-1];
};

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    let splitUp = split(arr);
    let left = mergeSort(splitUp[0]);
    let right = mergeSort(splitUp[1]);
    return merge(left, right);
}

function split(arr) {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return [left, right];
}

function merge(arr1, arr2) {
    let res = [];
    let idxOne = 0;
    let idxTwo = 0;
    while (idxOne !== arr1.length && idxTwo !== arr2.length) {
        if (arr1[idxOne] > arr2[idxTwo]) {
            res.push(arr1[idxOne]);
            idxOne++;
        } else {
            res.push(arr2[idxTwo]);
            idxTwo++;
        }
    }
    while (idxOne !== arr1.length) {
        res.push(arr1[idxOne]);
        idxOne++;
    }
     while (idxTwo !== arr2.length) {
        res.push(arr2[idxTwo]);
        idxTwo++;
    }
    return res;
}