let modal_window = document.querySelector(".modal_window");
let krest = document.querySelector("#krest");
let faq_question = document.querySelectorAll(".faq_question")
let faq_answer = document.querySelectorAll(".faq_answer")

setInterval(() => {
    modal_window.style.display = "block";
    modal_window.className = 'modal_window animate__animated animate__zoomIn'
}, 3000);

krest.onclick = () => {
    modal_window.className = 'modal_window animate__animated animate__zoomOutDown';
    // modal_window.style.display = "none";
}

faq_question[0].onclick = () => {
    if (faq_answer[0].style.display == '' || faq_answer[0].style.display == 'none' ) {
        faq_answer[0].style.display = 'block';
        // alert('показался')
    } else{
        // alert('вызвался')
        faq_answer[0].style.display = 'none';
    }
}
