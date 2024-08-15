let person1 = true;
let a = [];
let count = 0;
let aRed = [];
let aBlue = [];

const checkWin = () => {
    const targetValues = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < 8; i++) {
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
    if (count === 8) {
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
            a[n] = 'X';
        } else {
            box.classList.add('o-mark');
            person1 = true;
            aBlue.push(n);
            aBlue.sort((a, b) => a - b);
            if (count >= 4) {
                checkWin();
            }
            a[n] = 'O';
        }
        count++;
    } else {
        alert("Move not possible!");
    }
}



