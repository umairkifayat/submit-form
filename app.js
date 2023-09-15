const email = document.querySelector("#email");
const password = document.querySelector("#password");
const p = document.querySelector("p");

const arr = [];
function render(params) {
    p.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        p.innerHTML += `<p>Email: ${arr[i].email}, Password: ${arr[i].password}</p>
        <button onclick="Edittext(${i})">Edit</button>
        <button onclick="deletetext(${i})">Delete</button>`
    }
}
function user(e) {
    e.preventDefault();
    p.innerHTML = "";

    const add = {
        email: email.value,
        password: password.value,
    }

    arr.push(add);

    for (let i = 0; i < arr.length; i++) {
        p.innerHTML += `<p>Email: ${arr[i].email}, Password: ${arr[i].password}</p>
        <button onclick="Edittext(${i})">Edit</button>
        <button onclick="deletetext(${i})">Delete</button>`
    }

    email.value = "";
    password.value = "";

}

function deletetext(index) {
    p.innerHTML = "";
    arr.splice(index, 1);

    render()
}

function Edittext(index) {
    p.innerHTML = " ";
    // let uservalue = prompt("enter your edit value");
    const user = prompt("enter your edit value");
    const user2 = prompt("enter your password value");
    arr[index].email = user;
    arr[index].password = user2;

    render()
}