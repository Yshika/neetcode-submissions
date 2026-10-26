class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortedStrs = strs.map((str) => str.split("").sort().join(""));
        let seen = new Map();

        for (let i = 0; i < strs.length; i++) {
            if (seen.has(sortedStrs[i])) {
                seen.set(sortedStrs[i], [...seen.get(sortedStrs[i]), strs[i]]);
            } else {
                seen.set(sortedStrs[i], [strs[i]]);
            }
        }

        return [...seen.values()]
    }
}
