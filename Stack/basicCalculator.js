/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let result=0;
    let sign=1;
    let sum=0;
   let stack=[1]
  for(let x of s){
       if(x >= '0' && x <= '9') sum = sum * 10 + (x - '0');
       else{
           result += sum * sign * stack[stack.length - 1];
           sum = 0;
           if(x === '-') sign = -1;
           else if(x === '+') sign = 1;
           else if(x === '(') {stack.push(stack[stack.length - 1] * sign); sign = 1;}
           else if(x === ')') stack.pop(); 
       }
         
  }
 
   return result += (sign * sum);
};