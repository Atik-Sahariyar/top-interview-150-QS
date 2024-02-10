/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words, maxWidth) => {
    const result = [];
    let currentLine = [];
    let currentLength = 0;

    for (let word of words) {
        if (word.length + currentLine.length + currentLength > maxWidth) {
            for (let i = 0; i < maxWidth - currentLength; i++) {
                currentLine[i % (currentLine.length - 1 || 1)] += ' ';
            }
            result.push(currentLine.join(''));
            currentLine = [];
            currentLength = 0;
        }
        currentLine.push(word);
        currentLength += word.length;
    }

    let lastLine = currentLine.join(' ');
    while (lastLine.length < maxWidth) lastLine += ' ';
    result.push(lastLine);

    return result;
}