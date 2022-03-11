// 递归
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    qsort(nums, 0, nums.length - 1);
    return nums;
};

const qsort = function(nums, left, right) {
    if (left > right) return;
    const pivot = partition(nums, left, right);
    qsort(nums, left, pivot - 1);
    qsort(nums, pivot + 1, right);
}

const partition = function(nums, left, right) {
    const pivot = nums[left];
    while (left < right) {
        while (left < right && nums[right] >= pivot) {
            right--;
        }
        nums[left] = nums[right];
        while (left < right && nums[left] <= pivot) {
            left++;
        }
        nums[right] = nums[left];
    }
    nums[left] = pivot;
    return left;
}

// 迭代
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    const stack = [];
    stack.push(nums.length - 1);
    stack.push(0);
    while (stack.length) {
        let left = stack.pop();
        let right = stack.pop();
        if (left < right) {
            let pivotIndex = partition(nums, left, right);
            stack.push(pivotIndex - 1);
            stack.push(left);
            stack.push(right);
            stack.push(pivotIndex + 1);
        }
    }
    return nums;
};

const partition = function(nums, left, right) {
    const pivot = nums[left];
    while (left < right) {
        while (left < right && nums[right] >= pivot) {
            right--;
        }
        nums[left] = nums[right];
        while (left < right && nums[left] <= pivot) {
            left++;
        }
        nums[right] = nums[left];
    }
    nums[left] = pivot;
    return left;
}