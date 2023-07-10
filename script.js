let menuVisible = false;
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

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// las palabras tienen efecto de movimiento
let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
 
let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";
let changeText = ()=>{
    let currentWords = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });   
    nextWord.style.opacity="1";
    Array,from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },380 + i * 80);

    });
    currentWordIndex = currentWordIndex ===maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText,3000)



//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("lenguaje");
        habilidades[1].classList.add("libraries");
        habilidades[2].classList.add("database");
        habilidades[3].classList.add("frameworks");
        habilidades[4].classList.add("othertools");
        habilidades[5].classList.add("colaboracion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("empatia");
        habilidades[9].classList.add("autonomia");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

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












