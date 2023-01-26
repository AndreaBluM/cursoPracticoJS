const h1 = document.querySelector('h1')
const input = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btn-calcular')
const p = document.querySelector('#info')


function btnllamar(){
   let info = input.value + input2.value;
   p.innerHTML = info
}