/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost)  => {
    let n = gas.length;
    
    let totalGas = 0;
    let currentGas = 0;
    let start = 0;

    for(let i = 0; i < n; i++){
        let diff = gas[i] - cost[i];

        totalGas += diff;
        currentGas += diff;

        if(currentGas < 0){
            start = i + 1;
            currentGas = 0;
        }
    }
    
   const result = totalGas >= 0 ? start : -1; 

   return result;
};