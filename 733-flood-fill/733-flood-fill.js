/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

function floodFill(img, sr, sc, color) {
    let start = img[sr][sc];
    fill(img, sr, sc, color, start);
    return img;
};

const fill = (img, r, c, col, start) => {
    if (r < 0 || r >= img.length || c < 0 || c >= img[0].length || img[r][c] === col || img[r][c] !== start) {
        return;
    };
    img[r][c] = col;
    
    fill(img, r + 1, c, col, start);
    fill(img, r - 1, c, col, start);
    fill(img, r, c + 1, col, start);
    fill(img, r, c - 1, col, start);
}