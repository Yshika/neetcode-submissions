class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const arr = nums.sort((a, b) => a - b);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
                return true;
            }
        }
        return false;
    }
}
