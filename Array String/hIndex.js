/**
 * @param {number[]} citations
 * @return {number}
 */const hIndex = (citations) => {
    const h = citations.length;

    citations.sort((a, b) => (a - b));

    let i = null;
    for(i= 0; i < h; i++){
        if(h - i <= citations[i]){
            break;
        } 
    }
      return h - i
}; 