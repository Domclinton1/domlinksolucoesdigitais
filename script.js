
document.addEventListener("DOMContentLoaded", function() {
    const openModalButtons = document.querySelectorAll(".openModal");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    openModalButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modalId = button.getAttribute("data-modal-id");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modal = button.closest(".modal");
            modal.style.display = "none";
        });
    });

    window.addEventListener("click", function(event) {
        modals.forEach(function(modal) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
function order(){
    var click = window.document.querySelectorAll(".cta")
    window.open("https://wa.me/5531994038782?text=Ola,%20quero%20fazer%20um%20orçamento%20sobre um projeto...")
}
function orderAds(){
    var click = window.document.querySelectorAll(".cta")
    window.open("https://wa.me/5531994038782?text=Ola,%20quero%20contratar%20seu%20serviço%20de%20tráfego%20pago...")
}
function orderDelivery(){
    var click = window.document.querySelectorAll(".cta")
    window.open("https://wa.me/5531994038782?text=Ola,%20quero%20adquirir%20meu%20cardápio%20de%20online%20...")
}
function stars(){
    var click = window.document.querySelectorAll(".button-rate")
    window.open("https://g.page/r/CW83hQok18q-EAE/review")
}