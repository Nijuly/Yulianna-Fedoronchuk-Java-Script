function filterInputNumbers() {
    const inputNumbers = document.querySelector('.input').value;
    const arr = inputNumbers.split(',');
    const newArr = arr.filter(item => {
        return (item % 3 === 0) && (item > 0);
    });
    showResult(newArr);
}

document.getElementById("startFilter").onclick = filterInputNumbers;

function showResult(arr) {
    const result = document.createElement('p');
    result.classList.add('result');
    if (arr.length == 0) {
        result.innerHTML = `Результат: искомые элементы отсутсвуют`;
    }
    else {
        result.innerHTML = `Результат: ${arr.join(', ')}`;
    }
    document.querySelector('.result').replaceWith(result);
}
