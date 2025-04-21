const botaoCadastrar = document.querySelectorAll('.botao-cadastrar')[0];
const botaoEntrar = document.querySelectorAll('.botao-cadastrar')[1];
const formulario = document.querySelector('.form-cadastro');

botaoCadastrar.addEventListener('click', (e) => {
    e.preventDefault(); 
    alert('Cadastro realizado com sucesso!');
});

botaoEntrar.addEventListener('click', (e) => {
    e.preventDefault(); 
    alert('Bem-vindo(a) à biblioteca!');
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const nome = document.getElementById('usuario').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
        alert('Formulário enviado com sucesso!');
    }
});
