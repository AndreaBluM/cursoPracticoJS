

const h1 = document.querySelector('h1')
const p1 = document.querySelector('clase1')
const id = document.querySelector('id1')
const input = document.querySelector('input')

console.log({
    h1,
    p1,
    id,
    input
})
console.log(h1)

function cambiarh1 (){
    h1.innerHTML = 'jum si cambio'
}

input.value = ("Escribe aqui")