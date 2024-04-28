/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // `0b`prefix is used in JavaScript to denote a binary literal
    // Using the 0b prefix with BigInt in JS allows to directly convert a binary string to its decimal (base 10) representation.
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};