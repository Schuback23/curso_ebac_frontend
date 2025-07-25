const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event) {
event.preventDefault();

const campoA = parseFloat(document.getElementById('campoA').value);
const campoB = parseFloat(document.getElementById('campoB').value);

if (campoB > campoA) {
mensagem.textContent = 'Formulário válido! Campo B é maior que Campo A.';
mensagem.className = 'mensagem sucesso';
} else {
mensagem.textContent = 'Formulário inválido! Campo B deve ser maior que Campo A.';
mensagem.className = 'mensagem erro';
}
});