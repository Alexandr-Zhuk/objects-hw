const firstname = document.querySelector('input[name="name"]');
const surname = document.querySelector('input[name="surname"]');
const birthday = document.querySelector('input[name="birthday"]');
const go = document.querySelector('.go');
const output = document.querySelector('.output');
const form = document.querySelector('.form-inputs');

let people = [];

const clearInputs = () => {
    firstname.value = '';
    surname.value = '';
    birthday.value = '';
};

const addPeople = (ev) => {
    ev.preventDefault();
    let formData = new FormData(form);
    people.push({
        name: formData.get('name'),
        surname: formData.get('surname'),
        birthday: formData.get('birthday'),
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

form.addEventListener('submit', addPeople);