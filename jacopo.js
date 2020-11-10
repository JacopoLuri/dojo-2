// output:
// [
//     [a - 1, a - 2 ... a - 8],
//     [b - 1, b - 2 ... b - 8],
//     ...
//     [h - 1, h - 2 ... h - 8],
// ];

// start with empty Array
// with a loop initialize 8 element inside the first Array
// with a nested loop initialize 8 elements inside every row

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// const chessBoard = (myArr) => {
//     let board = [];
//     for (let i = 0; i < myArr.length; i++) {
//         let rows = [];
//         for (let j = 0; j < myArr.length; j++) {
//             rows.push(`${myArr[i]} - ${j + 1}`)
//         };
//         board.push(rows);
//     };
//     return board;
// };

// console.log(chessBoard(letters));end

function genCharArray(startNumber, endNumber) {
    let grid = [];
    let i = startNumber.charCodeAt(0);
    let j = endNumber.charCodeAt(0);
    for (; i <= j; ++i) {
        grid.push(String.fromCharCode(i));
    }
    return grid;
}
console.log(genCharArray('a', 'z'));