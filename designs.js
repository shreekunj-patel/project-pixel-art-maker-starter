// CONSTANTS
const CANVAS = document.getElementById('pixelCanvas');
const SUBMIT_BTN = document.querySelector('input[type="submit"]');

// When size is submitted by the user, call makeGrid()
SUBMIT_BTN.addEventListener('click', makeGrid);

// Fill color in clicked cell of Canvas Grid
CANVAS.addEventListener('click', fillColor);


/**
 * This function makes 2d Grid/table from submitted user inputs.
 * @param {Event} evt Used for Event.preventDefault()
 */
function makeGrid(evt) {

    //prevent's default event of reloading page.
    evt.preventDefault();

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
 * fill color (change background color) for given html element tag
 * @param {Event} evt for use of event.target.nodeName
 */
function fillColor(evt) {
    if (evt.target.nodeName.toLowerCase() === 'td') {
        let colour = document.getElementById('colorPicker').value;
        evt.target.style.backgroundColor = colour;
    }
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