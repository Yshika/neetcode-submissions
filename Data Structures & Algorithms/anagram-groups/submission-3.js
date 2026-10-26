class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = new Map()
        
        strs?.forEach(e => {
            const value = ([...e]?.sort()).join('')

            if (!result?.has(value)) { 
                result.set(value ,[]) 
            }

            result.set(value,[...result.get(value),e])
        })

        

        return([...result.values()])
    }
}
