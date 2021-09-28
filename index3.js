const submit = document.querySelector("#submit");
const container = document.querySelector(".container");
let demo=document.getElementById("demo");
const first=document.getElementById("first")
var firstname,lastname;

submit.addEventListener('click', () => {
    firstname = document.getElementById("firstName").value;
    lastname = document.getElementById("lastName").value;
    if(firstname && lastname) {
    container.classList.add("container1");
    first.classList.add("isim");
    console.log(firstname + " " + lastname);
    demo.innerHTML=firstname + " " + lastname+"<br>Prepare to move on to the portfolio";
    setTimeout(() => {
        window.location.href = "https://muhamadiyev-akbarxon.netlify.app/";
    }, 1800);
    } else {
        alert("Data must be completed!");
    }
});