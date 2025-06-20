const botao = document.getElementById('boasvindas'); 

const areaMensagem = document.getElementById('areaMensagem');

const mensagemMotivacional = "bem vindo ao meu trabalho, espero que goste! nao desista dos seus sonhos, lute ate se tornarem realidade.";

botao.addEventListener('click', function()
 {
    areaMensagem.textContent = mensagemMotivacional;

    areaMensagem.style.color = 'green';

    areaMensagem.style.fontWeight = 'bold';
    
});