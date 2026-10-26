class Solution {
    topKFrequent(nums, k) {
        const count = new Map(); // number -> frequency
        for (const n of nums) {
            count.set(n, (count.get(n) ?? 0) + 1);
        }

        return [...count.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => num);
    }
}