class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        nums.forEach((num) => {
            if (map.has(num)) {
                map.set(num, [...map.get(num), num]);
            } else {
                map.set(num, [num]);
            }
        });

        const res = [
            ...new Set([...map.values()].sort((a, b) => b.length - a.length).flat()),
        ]?.slice(0, k);

        return res;
    }
}
