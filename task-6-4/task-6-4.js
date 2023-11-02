const button = document.querySelector('.btn');
const divBody = document.querySelector('div.out');

const fioIn = document.getElementsByName('fio')[0];
const phoneIn = document.getElementsByName('phone')[0];
const birthdayIn = document.getElementsByName('birthday')[0];
const emailIn = document.getElementsByName('email')[0];

const data = [];

class Person {
    constructor(fio, phone, birthday, email) {
        this.fio = fio;
        this.phone = phone;
        this.birthday = birthday;
        this.email = email;
    }
}

button.onclick = (event) => {
    event.preventDefault();

    const fio = fioIn.value;
    const phone = phoneIn.value;
    const birthday = birthdayIn.value;
    const email = emailIn.value;

    const person = new Person(fio, phone, birthday, email);
    data.push(person);
    AddData(person);
}

function AddData(person) {
    divBody.innerHTML += `
        <div>
            <p>${person.fio}</p>
            <p>${person.phone}</p>
            <p>${person.birthday}</p>
            <p>${person.email}</p>
        </div>`;
}
