document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});

document.addEventListener('DOMContentLoaded', () => {
    const whatsappSpan = document.getElementById('whatsapp');
    whatsappSpan.addEventListener('click', () => {
        window.open('https://wa.me/5534984300186', '_blank');
    });
});

function agendarHorario() {
    sendMessage('Olá, gostaria de agendar um horário.');
}

function sendMessage(text) {
    window.open(`https://wa.me/5534984300186?text=${text}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const subMenu = document.querySelector('.sub-menu nav');
    subMenu.scrollLeft = 0; // Garante que o scroll comece no início
});