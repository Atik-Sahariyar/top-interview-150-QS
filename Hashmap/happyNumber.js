/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
    // Helper function to calculate the sum of squares of digits
    const calculateSumOfSquares = (num) => {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    // Use Floyd's cycle detection algorithm
    let slow = n;
    let fast = n;

    do {
        slow = calculateSumOfSquares(slow);
        fast = calculateSumOfSquares(calculateSumOfSquares(fast));

        if (slow === 1 || fast === 1) {
            return true;  // Happy number
        }
    } while (slow !== fast);

    return false;  // Cycle detected, not a happy number
};

// Test cases
console.log(isHappy(19)); // Output: true
console.log(isHappy(2));  // Output: false
