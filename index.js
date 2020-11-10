let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const chessBoard = (myArr) => {
    let board = [];
    for (let i = 0; i < myArr.length; i++) {
        let rows = [];
        for (let j = 0; j < myArr.length; j++) {
            rows.push(`${myArr[i]} - ${j + 1}`)
        };
        board.push(rows);
    };
    return board;
};

console.log(chessBoard(letters));

