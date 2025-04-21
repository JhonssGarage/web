document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});

document.addEventListener('DOMContentLoaded', () => {
    const whatsappSpan = document.getElementById('whatsapp');
    whatsappSpan.addEventListener('click', () => {
        window.open('https://wa.me/5534997959523', '_blank'); // Substitua pelo número correto
    });
});

function agendarHorario() {
    window.open('https://wa.me/5534997959523?text=Ol%C3%A1%2C+gostaria+de+agendar+um+hor%C3%A1rio.', '_blank');
}

function info(text) {
    window.open(`https://wa.me/5534997959523?text=${text}`, '_blank');
}