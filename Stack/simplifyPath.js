/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
    const parts = path.split('/');
    const stack = [];
 
    for (const part of parts) {
        if (part === '.' || part === '') continue;
        else if (part === '..') {
            stack.pop();
        } else {
            stack.push(part);
        }
    }
    
    const simplePath = '/' + stack.join('/')
    return simplePath;
 };