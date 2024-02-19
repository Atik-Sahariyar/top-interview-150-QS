/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const  groupAnagrams = (strs) => {
    const seen={};
    const arr=[];

  for(let i=0;i<strs.length;i++){
      const index= strs[i].split('').sort().join('')
      if(seen[index]){
          seen[index].push(strs[i])
      }else{
          seen[index]=[strs[i]]
      }
  }

  for(let i in seen){
      arr.push(seen[i])
  }
  return arr
};