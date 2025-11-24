# Calculadora de IMC

Projeto simples feito por **Thiago Gomes** enquanto estudo JavaScript.  
A aplicação calcula o IMC do usuário e mostra a faixa de classificação.

## Funcionalidades
- Calcula o IMC automaticamente  
- Mostra a classificação (Abaixo do peso, Normal, Sobrepeso, etc.)  
- Validação de peso e altura  
- Exibição do resultado na tela  

## Como usar
1. Abra o arquivo `index.html`
2. Digite seu peso e altura
3. Clique em **Enviar**

## Código principal (main.js)

```js
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const peso = Number(e.target.querySelector('#peso').value);
  const altura = Number(e.target.querySelector('#altura').value);

  if (!peso) return setMensagem('Peso inválido', false);
  if (!altura) return setMensagem('Altura inválida', false);

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  setMensagem(`Seu IMC é ${imc} — ${nivelImc}`, true);
});

function getImc(peso, altura) {
  return (peso / (altura ** 2)).toFixed(2);
}

function getNivelImc(imc) {
  const nivel = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  return nivel[0];
}

function setMensagem(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = `<p class="${isValid ? 'ok' : 'erro'}">${msg}</p>`;
}
