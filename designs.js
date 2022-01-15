const CANVAS = document.getElementById('pixelCanvas');

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    /** Selects grid height from form "sizePicker" submitted by user */
    const height = parseInt(document.getElementById('inputHeight').value);
    /** Selects grid width from form "sizePicker" submitted by user */
    const width = parseInt(document.getElementById('inputWidth').value);

    /** makes 2d array from given height and width */
    const tableArray = make2DArray(height, width);

    //before creating canvas table to draw make sure
    //there's nothing inside table tag of index.html
    if (CANVAS.innerHTML) {
        CANVAS.innerHTML = '';
    }

    /** Creates Canvas from given table array */
    tableArray.forEach((row) => {
        CANVAS.append(document.createElement('tr'));
        row.forEach(() => {
            CANVAS.lastElementChild.append(document.createElement('td'));
        });
    });

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
    //console.log(arr2d);
    return arr2d;
}