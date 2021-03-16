let modal_window = document.querySelector(".modal_window");
let krest = document.querySelector("#krest");
let faq_question = document.querySelector(".faq_question")
let faq_answer = document.querySelector(".faq_answer")

setInterval(() => {
    modal_window.style.display = "block";
    modal_window.className = 'modal_window animate__animated animate__zoomIn'
}, 3000);

krest.onclick = () => {
    modal_window.className = 'modal_window animate__animated animate__zoomOutDown';
    // modal_window.style.display = "none";
}
faq_question.onclick = () => {
    if (faq_answer.style.display == '' || faq_answer.style.display == 'none' ) {
        faq_answer.style.display = 'block';
    } else{
        faq_answer.style.display = 'none';
    }
}