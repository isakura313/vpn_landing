// alert("привет! Это я, твой первый скрипт")
// let x = +prompt("Введите первое число")
// let y = +prompt("Введите число номер 2")
// alert(x+y)


setTimeout(() => {
    document.querySelector(".modal_window").style.display = "block";
}, 1000);

document.querySelector("#krest").onclick = () =>{
    document.querySelector(".modal_window").style.display = "none";
}