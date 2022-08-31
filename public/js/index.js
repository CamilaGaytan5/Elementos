
let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let a = document.querySelector('a');
let p = document.querySelectorAll('p');
let body = document.querySelector('body');

let nombre = prompt('Ingrese su nombre');

if(nombre) {
    h2.innerText += nombre
}else{
    h2.innerText += 'Invitado'
};

h2.style.textTransform = 'uppercase';

a.style.color = '#E51B3E';

let fondoDePantalla = confirm('¿Desea colocar un fondo de pantalla');

if(fondoDePantalla){
    body.classList.add('fondo')
};

p.forEach(parrafo => {
    if (parrafo % 2 == 0) {
        
    }
});