let person1 = true;
let a = [];
let count = 0;
let aRed = [];
let aBlue = [];

const checkWin = () => {
    const targetValues = [
        // Horizontal Wins
        [0, 1, 2, 3], [1, 2, 3, 4],
        [5, 6, 7, 8], [6, 7, 8, 9],
        [10, 11, 12, 13], [11, 12, 13, 14],
        [15, 16, 17, 18], [16, 17, 18, 19],
        [20, 21, 22, 23], [21, 22, 23, 24],

        // Vertical Wins
        [0, 5, 10, 15], [5, 10, 15, 20],
        [1, 6, 11, 16], [6, 11, 16, 21],
        [2, 7, 12, 17], [7, 12, 17, 22],
        [3, 8, 13, 18], [8, 13, 18, 23],
        [4, 9, 14, 19], [9, 14, 19, 24],

        // Diagonal Wins (Top-Left to Bottom-Right)
        [0, 6, 12, 18], [1, 7, 13, 19],
        [5, 11, 17, 23], [6, 12, 18, 24],
        [4, 8, 12, 16], [8, 12, 16, 20],

        // Diagonal Wins (Top-Right to Bottom-Left)
        [3, 7, 11, 15], [4, 8, 12, 16],
        [8, 12, 16, 20], [9, 13, 17, 21]
    ];

    for (let i = 0; i < targetValues.length; i++) {
        const allMatch1 = targetValues[i].every(value => aRed.includes(value));
        if (allMatch1) {
            alert('Person 1 wins!');
            window.location.reload();
            return;
        }
        const allMatch2 = targetValues[i].every(value => aBlue.includes(value));
        if (allMatch2) {
            alert('Person 2 wins!');
            window.location.reload();
            return;
        }
    }
    if (count === 25) {
        alert('It\'s a draw!');
        window.location.reload();
    }
}

const changeColor = (id, n) => {
    const box = document.getElementById(id);
    if (!a[n]) {
        if (person1) {
            box.classList.add('x-mark');
            person1 = false;
            aRed.push(n);
            aRed.sort((a, b) => a - b);
            if (count >= 4) {
                checkWin();
            }
            console.log(aRed);
        } else {
            box.classList.add('o-mark');
            person1 = true;
            aBlue.push(n);
            aBlue.sort((a, b) => a - b);
            if (count >= 4) {
                checkWin();
            }
            console.log(aBlue);
        }
        a[n] = true;
        count++;
    } else {
        alert("Move not possible!");
    }
}
