class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const id = new Map();

        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i];

            if (id.has(need)) {
                return [i, id.get(need)];
            }

            id.set(nums[i], i);
        }

        return [];
    }
}
