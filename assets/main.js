function sendWhatsAppMessage() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var platform = document.getElementById('platform').value;

    var message = encodeURIComponent(
        `Olá! Gostaria de me inscrever no Campeonato Warzone.\n\n` +
        `Nome: ${name}\n` +
        `E-mail: ${email}\n` +
        `Plataforma: ${platform}\n`
    );

    var phoneNumber = '3391280758'; // Substitua pelo número de telefone do WhatsApp
    var url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, '_blank');
}

function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    sendWhatsAppMessage();
}

//Cookie - banner

document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    // Verifica se o usuário já aceitou os cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        // Mostra o banner se os cookies não foram aceitos
        cookieBanner.style.display = 'block';
    }

    // Adiciona um evento ao botão para aceitar cookies
    acceptCookiesButton.addEventListener('click', function() {
        // Armazena a aceitação de cookies no localStorage
        localStorage.setItem('cookiesAccepted', 'true');
        // Oculta o banner
        cookieBanner.style.display = 'none';
    });
});
