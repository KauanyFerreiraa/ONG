export function validateForm() {
    const form = document.getElementById('form');
    const message = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = form.nome.value.trim();
        const email = form.email.value.trim();

        if(nome === '' || email === '') {
            message.textContent = 'Todos os campos devem ser preenchidos!';
            message.style.color = 'red';
        } else if(!/\S+@\S+\.\S+/.test(email)) {
            message.textContent = 'Email inválido!';
            message.style.color = 'red';
        } else {
            message.textContent = 'Formulário enviado com sucesso!';
            message.style.color = 'green';
            form.reset();
        }
    });
}
