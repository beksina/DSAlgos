/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

// sort the boxes by i[1] -> units
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1]);
    let units = 0;
    let idx = 0;
    while (truckSize > 0 && idx < boxTypes.length) {
        let boxes = boxTypes[idx][0];
        while (boxes > 0 && truckSize > 0) {
            units += boxTypes[idx][1];
            boxes--;
            truckSize--;
        }
        idx++;
    }
    return units;
};