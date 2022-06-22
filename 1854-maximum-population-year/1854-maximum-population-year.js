/**
 * @param {number[][]} logs
 * @return {number}
 */
function maximumPopulation(logs) {
    const yrs = {};
    for (let log of logs) {
        for (let i = log[0]; i < log[1]; i++) {
            if (i in yrs) yrs[i]++
            else yrs[i] = 1;
        }
    }
    let max = 0;
    let earliest;
    for (let yr in yrs) {
        if (yrs[yr] > max) {
            earliest = yr;
            max = yrs[yr];
        }
    }
    return earliest;
};


/* 

EARLIEST yr w the max population:
would have to basically be in range from their birth to before death

[[1950, 1961], [1960, 1971], [1970, 1981]]

person not counted the yr they died
*/

/*
[ [1982, 1998], [2010, 2035], [2013, 2042], [2022, 2050], [2047, 2048]]
*/




