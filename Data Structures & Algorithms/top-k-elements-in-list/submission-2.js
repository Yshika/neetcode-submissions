class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = {};

        nums?.forEach((elm) => {
            if (!result[elm]) result[elm] = [];

            result[elm]?.push(elm);
        });

        const sorted = Object.values(result)?.sort((a, b) => b?.length - a?.length);

        const final_arr = [];

        for (let i = 0; i < k; i++) final_arr?.push(sorted[i][0]);

        return(final_arr);
    }
}
