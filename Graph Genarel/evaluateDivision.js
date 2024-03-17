/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = (equations, values, queries) => {
    let adjList = new Map();

    for (let i = 0; i < equations.length; i++) {
        let [var1, var2] = equations[i];
        if (!adjList.has(var1)) adjList.set(var1, new Map());
        if (!adjList.has(var2)) adjList.set(var2, new Map());
        adjList.get(var1).set(var2, values[i]);
        adjList.get(var2).set(var1, 1 / values[i]);
    }

    let bfs = (var1, var2) => {
        let visited = new Set([var1]);
        if (!adjList.has(var1) || !adjList.has(var2)) return -1;

        let queue = [{ currVar: var1, product: 1 }];

        while (queue.length) {
            let { currVar, product } = queue.shift();
            if (currVar === var2) return product;

            let neighbors = Array.from(adjList.get(currVar).keys());
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    let weight = adjList.get(currVar).get(neighbor);
                    queue.push({ currVar: neighbor, product: product * weight })
                }
            }
        }
        return -1;
    }

    let result = [];
    for (let [var1, var2] of queries) result.push(bfs(var1, var2));
    return result;
}