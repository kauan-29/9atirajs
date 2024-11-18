// Exemplo de validação simples do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio padrão

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso!');
        // Aqui você pode enviar o formulário via AJAX ou apenas resetá-lo
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
