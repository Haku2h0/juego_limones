let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO= 30
const ALTURA_PERSONAJE= 60
const ANCHO_PERSONAJE= 40
let personajex=canvas.width/2
function INICIAR(){
    dibujarSuelo();
    ddibujarPersonaje();;
}

function dibujarSuelo(){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}
function ddibujarPersonaje(){
     ctx.fillStyle="yellow";
    ctx.fillRect(personajex,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),40,ALTURA_PERSONAJE);
}
function moverizquierda(){
    personajex=personajex-10
    limpiarpantalla()
}
function limpiarpantalla(){
    limpiar()
    dibujarSuelo()
    ddibujarPersonaje()
}
function limpiar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function moverderecha(){
    personajex=personajex+10
    limpiarpantalla()}