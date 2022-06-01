function filterInputNumbers() {
    const inputNumbers = document.querySelector('.input').value;
    const arr = inputNumbers.split(',');
    const newArr = arr.filter(item => {
        if (item == 0) {           //добавлено исключение, так как 0 кратен любому числу ив результате будет 0
            return false;
        }
        else if (item % 3 === 0) {
            return true;
        }
    });
    showResult(newArr);
}

document.getElementById("startFilter").onclick = filterInputNumbers;

function showResult(arr) {
    const result = document.createElement('p');
    result.classList.add('result');
    if (arr == 0) {
        result.innerHTML = `Результат: искомые элементы отсутсвуют`;
    }
    else {
        result.innerHTML = `Результат: ${arr.join(', ')}`;
    }
    document.querySelector('.result').replaceWith(result);
}
