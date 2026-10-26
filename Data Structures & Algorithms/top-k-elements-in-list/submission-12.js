class Solution {
    topKFrequent(nums, k) {
        const count = new Map();
        for (const n of nums) {
            count.set(n, (count.get(n) ?? 0) + 1);
        }

        // buckets[c] = numbers that appear exactly c times
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, c] of count) {
            buckets[c].push(num);
        }

        const res = [];
        for (let c = buckets.length - 1; c > 0 && res.length < k; c--) {
            res.push(...buckets[c]);
        }
        return res;
    }
}