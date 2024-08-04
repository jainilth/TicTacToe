person1 = true
a = []
count = 0
aRed = []
aBlue = []
const checkWin = () => {
    console.log(a)
    const targetValues = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (i = 0; i < 8; i++) {
        // if(targetValues[i][0]==aRed[0]&&targetValues[i][1]==aRed[1]&&targetValues[i][2]==aRed[2]) {
        //     alert('person 1 win')
        //     window.location.reload();
        // }
        // if(targetValues[i][0]==aBlue[0]&&targetValues[i][1]==aBlue[1]&&targetValues[i][2]==aBlue[2]) {
        //     alert('person 2 win')
        //     window.location.reload();
        // }
        const allMatch1 = targetValues[i].every((value) => aRed.includes(value));
        if (allMatch1) {
            // if(aRed.le)
            alert('person 1 win')
            window.location.reload();
            return;
        } 
        const allMatch2 = targetValues[i].every((value) => aBlue.includes(value));
        if (allMatch2) {
            // if(aRed.le)
            alert('person 2 win')
            window.location.reload();
            return;
        } 
    }
}
const changeColor = (id, n) => {
    const box = document.getElementById(id);
    if (!a[n]) {
        if (person1) {
            box.style.backgroundColor = "red";
            person1 = false
            aRed.push(n)
            aRed.sort((a, b) => {
                return a - b;
            })
            console.log(aRed)
            count++
            if (count > 4) {
                checkWin()
            }
            a[n] = 'X'
            return;
        }
        else {
            box.style.backgroundColor = "blue";
            person1 = true
            aBlue.push(n)
            aRed.sort((a, b) => {
                return a - b;
            })
            console.log(aBlue)
            count++
            if (count > 4) {
                checkWin()
            }
            a[n] = 'O'
            return;
        }
    }
    else {
        alert("move not possible!")
    }

}
