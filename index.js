// template_xfp7bn9
// service_a9k4ngo
// 7wmGDaO8T0Qh2X3sa

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add("modal__overlay--visible");
    emailjs
    .sendForm(
        'service_a9k4ngo',
        'template_xfp7bn9',
        event.target,
        "7wmGDaO8T0Qh2X3sa"
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
    }).catch (() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me at juandavid_0201@hotmail.com"
        );
    })
}

let isModalOpen = false;
function toggldModal () {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += "modal--open";

}