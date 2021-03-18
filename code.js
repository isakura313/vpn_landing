let modal_window = document.querySelector(".modal_window");
let krest = document.querySelector("#krest");
let faq_question = document.querySelectorAll(".faq_question")
let faq_answer = document.querySelectorAll(".faq_answer")
let modal_data = document.querySelector(".modal_window h1")
let timer = document.getElementById("timer");
let data_p = ['Информация об компании', 
               'Информация о клиентах', 
               'Информация об услугах']

data_p.map((e)=>{
    let el = document.createElement('p')
    el.innerHTML = e
    el.className = "promo__info_p";
    document.body.append(el);
})


let d = new Date()
modal_data.innerHTML = d.getDate() + "/" + d.getMonth();

setInterval(() => {
    let d_new = new Date()
    timer.innerHTML = d_new.getHours() + ":" + d_new.getMinutes() + ":" + d_new.getSeconds();
}, 1000)

setInterval(() => {
    modal_window.style.display = "block";
    modal_window.className = 'modal_window animate__animated animate__zoomIn'
}, 3000);

krest.onclick = () => {
    modal_window.className = 'modal_window animate__animated animate__zoomOutDown';
    // modal_window.style.display = "none";
}
faq_question = Array.from(faq_question);
faq_question.map((el, i) => {
    el.onclick = () => {
        if (faq_answer[i].style.display == '' || faq_answer[i].style.display == 'none') {
            faq_answer[i].style.display = 'block';
            faq_answer[i].className = "faq_answer animate__animated animate__lightSpeedInLeft"
        } else {
            faq_answer[i].style.display = 'none';
        }
    }
})

// for (let i = 0; i < faq_answer.length; i += 1) {
//     faq_question[i].onclick = () => {
//         if (faq_answer[i].style.display == '' || faq_answer[i].style.display == 'none') {
//             faq_answer[i].style.display = 'block';
//             faq_answer[i].className = "faq_answer animate__animated animate__lightSpeedInLeft"
//             // alert('показался')
//         } else {
//             // alert('вызвался')
//             faq_answer[i].style.display = 'none';
//         }
//     }
// }
