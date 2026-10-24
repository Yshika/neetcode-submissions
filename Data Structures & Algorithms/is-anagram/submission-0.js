class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sorted_s = s.split("").sort();
        const sorted_t = t.split("").sort();
        let temp = 0;
        console.log(sorted_s, sorted_t);
        if (sorted_s.length !== sorted_t.length) return false;

        for (let i = 0; i < sorted_s.length; i++) {
            console.log(sorted_s[i]?.toLowerCase(), sorted_t[i]?.toLowerCase());
            if (sorted_s[i]?.toLowerCase() !== sorted_t[i]?.toLowerCase()) {
                temp += 1;
                break;
            }
        }

        if (temp > 0) return false;
        else return true;
    }
}
