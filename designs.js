// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}

/**
 * makes 2d array from given height(raw) and width(columns)
 * @param {number} height total number of rows
 * @param {number} width total number of columns
 * @returns 2d array
 */
function make2DArray(height, width) {
    let arr2d = [];
    for (let i = 0; i < height; i++) {
        arr2d.push([]);
        for (let j = 0; j < width; j++) {
            arr2d[i].push(j);
        }
    }
    console.log(arr2d);

    return arr2d;
}