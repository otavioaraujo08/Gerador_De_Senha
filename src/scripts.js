const senha     = document.querySelector('#senha');
const novaSenha = document.querySelector('#novaSenha');

function gerarSenha(){
    novaSenha.innerHTML = '';

    if(senha.value === ''){
        alert('Digite o Tamanho da Sua Senha');
        
        return;
    }

    let charset  = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    for(var i = 0, n = charset.length; i < senha.value; i++){
        password += charset.charAt( Math.floor( Math.random() * n));
    }

    let resultado = document.createTextNode(password);

    return novaSenha.appendChild(resultado)
}