/*let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}


// Obtener los elementos del menú
const nav = document.querySelector('nav');
const navResponsive = document.querySelector('.nav-responsive');
const navResponsiveList = document.querySelector('nav.responsive ul');

// Función para alternar la visibilidad de los menús
function toggleMenu() {
  nav.classList.toggle('hidden');
  navResponsive.classList.toggle('hidden');
}

// Función para mostrar el menú responsive en pantallas pequeñas
function showResponsiveMenu() {
  navResponsive.classList.remove('hidden');
}

// Función para ocultar el menú responsive en pantallas grandes
function hideResponsiveMenu() {
  navResponsive.classList.add('hidden');
}

// Evento para alternar la visibilidad de los menús al hacer clic en el botón responsive
navResponsive.addEventListener('click', toggleMenu);

// Evento para mostrar u ocultar el menú responsive según el tamaño de la pantalla
window.addEventListener('resize', function() {
  if (window.innerWidth <= 980) {
    showResponsiveMenu();
  } else {
    hideResponsiveMenu();
  }
});

// Inicialmente, ocultar el menú responsive en pantallas grandes
hideResponsiveMenu();


/****cambio de input a label**** */

/*const inputs = document.querySelectorAll('.input input, .input textarea');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        const label = this.parentElement.querySelector('.label');
        label.classList.add('active');
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            const label = this.parentElement.querySelector('.label');
            label.classList.remove('active');
        }
    });
});
*/


// ==== circle sakill=====



const circles = document.querySelectorAll('.circle');
circles.forEach((elem) => {
  var dots = elem.getAttribute('data-dots');
  var marked = elem.getAttribute('data-percent');
  var percent = Math.floor(dots*marked/100);
  var points = '';
  var rotate = 360 / dots;
  

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }

  elem.innerHTML = points;
 
  const pointsMarked = elem.querySelectorAll('.points');
  for (let i = 0; i < marked; i++) {
    pointsMarked[i].classList.add('marked');
  }
})

//***formulario */
/*
var inputs = document.getElementsByClassName("form_input");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function() {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add('fijar');
    } else {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
}
*/

var inputs = document.getElementsByClassName('form_input');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('focus', function() {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add('fijar');
    }
  });
  inputs[i].addEventListener('blur', function() {
    if (this.value.length === 0) {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
}


