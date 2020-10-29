let squares = document.querySelectorAll(".reversi_board td");

// count
let turn;
const pieces = ["black", "white"];

    window.onload = function () {
        turn = 0;
        squares[27].classList.add("black");
        squares[28].classList.add("white");
        squares[35].classList.add("white");
        squares[36].classList.add("black");

            // 0 ~ 63(8*8 board => length: 64)
        for (let i = 0, len = squares.length; i < len; i++) {
            squares[i].addEventListener("click", function () {
                placement(i); //click and put a stone on the board where player chose
            }, false);
        }
    }

    function placement(index) {
        // evenNum black, oddNum white
        squares[index].classList.add(pieces[turn % 2]);
        reverse(index);
        // move to next turn
        turn++;
    }

    function reverse(index) {
        //mine
        let oneself = pieces[turn % 2];
        //opponent's
        let opponent = pieces[(turn % 2) ^ 1];

        //left
        for (let i = index - 1, end = index - index % 8, buf = []; i >= end; i--) {
            if (squares[i].classList.length === 0) {
                break;
            }
            if (squares[i].classList.contains(oneself)) {
                buf.forEach(b => b.classList.replace(opponent, oneself));
                break;
            }
            buf.push(squares[i]);
        }
        //right
        for (let i = index + 1, end = index + (7 - index % 8), buf = []; i <= end; i++) {
            if (squares[i].classList.length === 0) {
                break;
            }
            if (squares[i].classList.contains(oneself)) {
                buf.forEach(b => b.classList.replace(opponent, oneself));
                break;
            }
            buf.push(squares[i]);
        }
        //up
        for (let i = index - 8, buf = []; i >= 0; i -= 8) {
            if (squares[i].classList.length === 0) {
                break;
            }
            if (squares[i].classList.contains(oneself)) {
                buf.forEach(b => b.classList.replace(opponent, oneself));
                break;
            }
            buf.push(squares[i]);
        }
        //down
        for (let i = index + 8, buf = []; i <= 63; i += 8) {
            if (squares[i].classList.length === 0) {
                break;
            }
            if (squares[i].classList.contains(oneself)) {
                buf.forEach(b => b.classList.replace(opponent, oneself));
                break;
            }
            buf.push(squares[i]);
        }
        //upper-left
        for (let i = index - 9, buf = []; i >= 0; i -= 9) {
            if (squares[i].classList.length === 0) {
                break;
            }
            if (squares[i].classList.contains(oneself)) {
                buf.forEach(b => b.classList.replace(opponent, oneself));
                break;
            }
            buf.push(squares[i]);
        }
        //bottom-left
        for (let i = index + 7, buf = []; i <= 63; i += 7) {
            if (squares[i].classList.length === 0) {
                break;
            }
            if (squares[i].classList.contains(oneself)) {
                buf.forEach(b => b.classList.replace(opponent, oneself));
                break;
            }
            buf.push(squares[i]);
        }
        //upper-right
        for (let i = index - 7, buf = []; i >= 0; i -= 7) {
            if (squares[i].classList.length === 0) {
                break;
            }
            if (squares[i].classList.contains(oneself)) {
                buf.forEach(b => b.classList.replace(opponent, oneself));
                break;
            }
            buf.push(squares[i]);
        }
        //bottom-right
        for (let i = index + 9, buf = []; i <= 63; i += 9) {
            if (squares[i].classList.length === 0) {
                break;
            }
            if (squares[i].classList.contains(oneself)) {
                buf.forEach(b => b.classList.replace(opponent, oneself));
                break;
            }
            buf.push(squares[i]);
        }
    }