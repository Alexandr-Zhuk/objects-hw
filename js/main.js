const firstname = document.querySelector('input[name="name"]');
const surname = document.querySelector('input[name="surname"]');
const birthday = document.querySelector('input[name="birthday"]');
const go = document.querySelector('.go');
const output = document.querySelector('.output')

let people = [];

const clearInputs = () => {
    firstname.value = '';
    surname.value = '';
    birthday.value = '';
};

const addPeople = () => {
    people.push({
        name: firstname.value,
        surname: surname.value,
        birthday: birthday.value,
    });
    renderPeople();
    clearInputs();
};

const renderPeople = () => {
    let res = '';
    for(let i = 0; i < people.length; i++){
        res += `Тебе звуть - ${people[i].name}. Твоє прізвище - ${people[i].surname}. Дата твого народження - ${people[i].birthday}<br>`;
    }
    output.innerHTML = res;
};

go.addEventListener('click', addPeople);