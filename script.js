document.querySelectorAll('.faq-question').forEach((item) => {
    item.addEventListener('click', () => {
        const faqItem = item.parentNode;

        // Verifica se o item já está aberto
        const isOpen = faqItem.classList.contains('open');

        // Fecha todos os itens
        document.querySelectorAll('.faq-item').forEach((faq) => {
            faq.classList.remove('open');
        });

        // Se o item não estava aberto, abre ele
        if (!isOpen) {
            faqItem.classList.add('open');
        }
    });
});

function wpp(){
    var click = window.document.querySelectorAll(".btn")
    window.open("https://wa.me/5531994038782?text=Olá,%20gostaria%20de%20mais%20informações%20sobre...")
}

function stars(){
    var click = window.document.querySelectorAll(".button-rate")
    window.open("https://g.page/r/CW83hQok18q-EAE/review")
}


 // Define a data de término da promoção
 const endDate = new Date("2024-11-15T23:59:59").getTime();

 // Função para atualizar a contagem regressiva
 function updateCountdown() {
     const now = new Date().getTime();
     const timeRemaining = endDate - now;

     if (timeRemaining > 0) {
         // Calcula os dias, horas, minutos e segundos restantes
         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

         // Exibe a contagem regressiva no elemento com id "countdown"
         document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
     } else {
         // Exibe uma mensagem quando a promoção acabar
         document.getElementById("promo-timer").innerHTML = "A promoção terminou!";
     }
 }

 // Atualiza a contagem regressiva a cada segundo
 setInterval(updateCountdown, 1000);



 let lastScroll = 0;

function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

// Esconder/mostrar o menu na rolagem
window.addEventListener('scroll', () => {
    const menu = document.querySelector('.menu');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        menu.classList.add('hidden'); // Esconde ao rolar para baixo
    } else {
        menu.classList.remove('hidden'); // Mostra ao rolar para cima
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
});

// Fechar o menu ao clicar fora ou em um item do menu
document.addEventListener('click', (event) => {
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-btn');
    const lista = document.querySelector('.lista');

    if (!menu.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }

    // Fechar ao clicar em um item do menu
    if (lista.contains(event.target)) {
        menu.classList.remove('active');
    }
});
