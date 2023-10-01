//Evento para não atualizar a pagina 
const form = document.querySelector('#formulario')
form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('evento previnido')
const inputPeso = e.target.querySelector('#peso');  
const inputAltura = e.target.querySelector('#altura');

const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);
//validação
if (!peso){
  setMenssagem('Peso não é valido!!!', false);
  return;
}
if (!altura){
  setMenssagem('Altura não é valido!!!', false);
  return;
}
const imc = getImc (peso, altura);
const nivelImc = getNivelImc(imc);
console.log(imc, nivelImc);
const msg = `Seu IMC é ${imc} você está em: ${nivelImc}`
setMenssagem(msg, true)
});
//calculo do imc
function getImc(peso, altura){
  const imc = peso / (altura ** 2);
  return imc.toFixed(2);
}
//Cria paragrafo
function criaP(){
  const p = document.createElement('p');
  return p;
}
//Cria um NivelIMC
function getNivelImc(imc){
  const nivel = ['Abaixo do Peso','Peso Nomal','Sobrepeso','Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3',];
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
             
}
//Cria Menssagem
function setMenssagem (msg, isValid){
  const resultado = document.querySelector('#resultado', isValid);
  resultado.innerHTML = '';
  const p = criaP();

  if (isValid){
    p.classList.add('paragrafo-resultado');
  }else{
    p.classList.add('bad');
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
  
}