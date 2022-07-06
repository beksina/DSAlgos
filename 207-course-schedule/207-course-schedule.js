/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

function canFinish(numCourses, pre) {
    let nodeMap = {};
    // set up nodes 
    for (let i = 0; i < numCourses; i++) {
        nodeMap[i] = [];
    }
    // grab all the neighbors 
    for (let i = 0; i < pre.length; i++) {
        let node = pre[i][0];
        nodeMap[node].push(pre[i][1]);
    }
    // dfs to check cycle
    const visited = {};
    function dfs(n) {
        if (n in visited) return false;
        if (nodeMap[n] === []) return true;
        visited[n] = true;
        for (let nei of nodeMap[n]) {
            if (!dfs(nei)) return false;
        }
        delete visited[n];
        nodeMap[n] = [];
        return true;
    }
    // loop thru each bc there may be seperate graphs
    for (let crs in nodeMap) {
        if (!dfs(crs)) return false;
    }
    return true;
}


/*
do a dfs to find cycle 
*/