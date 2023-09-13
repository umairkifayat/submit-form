const email = document.querySelector("#email");
const password = document.querySelector("#password");
const p = document.querySelector("p");

const arr = [""]

function user(e) {
    e.preventDefault();
    p.innerHTML = "";

    // console.log(email.value);
    // console.log(password.value);
    const add = {
        email: email.value,
        password: password.value,
    }
    // console.log(obj);
    arr.push(add);


    // console.log(array);
    for (let i = 1; i < arr.length; i++) {
        // console.log(add);
        p.innerHTML += ` <p>Email: ${arr[i].email}, Password: ${arr[i].password}</P>
    <button>Edit</button>
    <button>Delete</button>`

    }
    email.value = "";
    password.value = "";



}















