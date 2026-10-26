class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {}
        
        const sorted_arr = strs?.forEach(e => {
            const value = ([...e]?.sort()).join('')

            if (!result?.[value]) { 
                result[value] = [] 
            }

            result[value]?.push(e)
        })

        

        return([...Object.values(result)])
    }
}
