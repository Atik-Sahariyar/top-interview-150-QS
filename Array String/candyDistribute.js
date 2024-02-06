/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const n = ratings.length;

    const candies = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    const totalCandy = candies.reduce((sum, val) => sum + val, 0)
    return totalCandy;
};