let blockHighTask = document.querySelector('.block--high--task');
let blockLowTask = document.querySelector('.block--low--task');
let informationHigh = document.querySelector('.high');
let informationLow = document.querySelector('.low');
let addTask = document.querySelector('.newTask--btn--high');
let addTaskLow = document.querySelector('.newTask--btn--low');




addTask.addEventListener('click',HIGH);
function HIGH () {

    let divMain = document.createElement('div');
    divMain.classList.add('task--block');
    blockHighTask.append(divMain);

    let divText = document.createElement('div');
    divText.classList.add('task--text');
    divMain.append(divText);
    divMain.textContent = informationHigh.value;
    informationHigh.value = '';

    let checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    divMain.prepend(checkbox);

    let button = document.createElement('button');
    button.classList.add('remove--btn');
    divMain.append(button);

    let removeBtn = document.querySelectorAll('.remove--btn');
    for(let removeBtn1 of removeBtn) {
        removeBtn1.addEventListener('click',remove);
        function remove () {
            removeBtn1.parentElement.remove();
        }

    }






}
addTaskLow.addEventListener('click',LOW);
function LOW () {

    let divMain = document.createElement('div');
    divMain.classList.add('task--block');
    blockLowTask.append(divMain);

    let divText = document.createElement('div');
    divText.classList.add('task--text');
    divMain.append(divText);
    divMain.textContent = informationLow.value;
    informationLow.value = '';

    let checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    divMain.prepend(checkbox);

    let button = document.createElement('button');
    button.classList.add('remove--btn');
    divMain.append(button);

    let removeBtn = document.querySelectorAll('.remove--btn');
    for(let removeBtn1 of removeBtn) {
        removeBtn1.addEventListener('click',remove);
        function remove () {
            removeBtn1.parentElement.remove();
        }

    }






}




