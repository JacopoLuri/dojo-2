// output:
// [
//     [a - 1, a - 2 ... a - 8],
//     [b - 1, b - 2 ... b - 8],
//     ...
//     [h - 1, h - 2 ... h - 8],
// ];
// our approach:
// start with empty Array
// with a loop initialize 8 element inside the first array
// with a nested loop initialize 8 elements inside every row


// create an empty array for our chessboard rows
let letters = [];

//create a function that will dinamically fill how much rows we want in the array 
const createRows = (startLetter, endLetter) => {
    let grid = [];
    let i = startLetter.charCodeAt(0);
    let j = endLetter.charCodeAt(0);
    for (; i <= j; ++i) {
        grid.push(String.fromCharCode(i));
    };
    return grid;
};
// setting an 8 rows chessboard
letters = createRows('a', 'h');

//create a function that will properly create the cheesboard starttin from the array of letters (rows) and add columns (nested array)
const chessBoard = (myArr) => {
    let board = [];
    for (let i = 0; i < myArr.length; i++) {
        let row = [];
        for (let j = 0; j < myArr.length; j++) {
            row.push(`${myArr[i]} - ${j + 1}`)
        };
        board.push(row);
    };
    return board;
};

console.log(chessBoard(letters));
// result 8 x 8 board
// [
//     [
//         'a - 1', 'a - 2',
//         'a - 3', 'a - 4',
//         'a - 5', 'a - 6',
//         'a - 7', 'a - 8'
//     ],
//     [
//         'b - 1', 'b - 2',
//         'b - 3', 'b - 4',
//         'b - 5', 'b - 6',
//         'b - 7', 'b - 8'
//     ],
//     [
//         'c - 1', 'c - 2',
//         'c - 3', 'c - 4',
//         'c - 5', 'c - 6',
//         'c - 7', 'c - 8'
//     ],
//     [
//         'd - 1', 'd - 2',
//         'd - 3', 'd - 4',
//         'd - 5', 'd - 6',
//         'd - 7', 'd - 8'
//     ],
//     [
//         'e - 1', 'e - 2',
//         'e - 3', 'e - 4',
//         'e - 5', 'e - 6',
//         'e - 7', 'e - 8'
//     ],
//     [
//         'f - 1', 'f - 2',
//         'f - 3', 'f - 4',
//         'f - 5', 'f - 6',
//         'f - 7', 'f - 8'
//     ],
//     [
//         'g - 1', 'g - 2',
//         'g - 3', 'g - 4',
//         'g - 5', 'g - 6',
//         'g - 7', 'g - 8'
//     ],
//     [
//         'h - 1', 'h - 2',
//         'h - 3', 'h - 4',
//         'h - 5', 'h - 6',
//         'h - 7', 'h - 8'
//     ]
// ]