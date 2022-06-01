function checkName() {
    const userName = 'Вячеслав';
    const inputName = document.querySelector('.inputName');
    if (inputName.value == userName) {
        alert(`Привет, ${userName}`);
        console.log(`Привет, ${userName}`);
    } else {
        alert('Нет такого имени');
        console.log('Нет такого имени');
    }
    inputName.value = '';
}
document.getElementById("checkName").onclick = checkName;