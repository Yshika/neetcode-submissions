class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const arr = nums.sort((a, b) => a - b);
        // for (let i = 0; i < arr.length-1; i++) {
        //     if (arr[i] === arr[i + 1]) {
        //         return true;
        //     }
        // }
        const unique = new Set(nums);
        if (unique.size < nums.length) return true;

        return false;
    }
}
