/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish =  (numCourses, prerequisites) => {
    const gragh = Array.from(Array(numCourses), () => []);
    const ranks = new Array(numCourses).fill(0);

    //build gragh and ranks --- AdjList and dependency count
    for (let [dest, src] of prerequisites) {
        gragh[src].push(dest);
        ranks[dest]++;
    }
    const queue = [];
    //push node to queue with 0 dependency
    ranks.forEach((r, i) => {
        if (!r) {
            queue.push(i);
        }
    })
    // bfs
    while (queue.length) {
        const f = queue.shift();
        numCourses--;
        //reduce neighbor ranks by 1;
        //push node to queue with 0 dependency

        gragh[f].forEach(neigh => {
            ranks[neigh]--;
            if (!ranks[neigh]) {
                queue.push(neigh);
            }
        })
    }

    return !numCourses;
};