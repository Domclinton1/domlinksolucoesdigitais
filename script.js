document.addEventListener("DOMContentLoaded", function() {
    var comentarios = document.querySelectorAll('.comentarios li');
    var index = 0;

    function nextComentario() {
        comentarios[index].classList.remove('active');
        index = (index + 1) % comentarios.length;
        comentarios[index].classList.add('active');
    }

    setInterval(nextComentario, 5000); // Altere o intervalo de troca de slide conforme necessário (em milissegundos)
});


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
