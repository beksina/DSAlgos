/**
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function(ratings) {
    let left = Array(ratings.length).fill(1);
    let right = Array(ratings.length).fill(1);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i-1]) {
            left[i] = left[i-1] + 1;
        }
    }
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1]) {
            right[i] = right[i+1] + 1;
        }
    }
    let total = 0;
    for (let i = 0; i < ratings.length; i++) {
        total += Math.max(left[i], right[i])
    }
    return total;
};


/*
each child assigned a rating e.g. [1,3,2,5]
each child must get at least 1 candy
children w a higher rating get more candies than their neighbors
return the min number of candies needed to distribute

[1,5,3,2]

1, 3, 2, 1 = 7
*/