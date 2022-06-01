function checkNumber() {
    const num = 7;
    const inputNum = document.querySelector('.inputNumber');
    if (inputNum.value > num) {
        alert('Привет');
        console.log('Привет');
    }
    inputNum.value = '';
}

document.getElementById("check").onclick = checkNumber;


