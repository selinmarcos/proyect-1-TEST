/*function click1()
{
alert("CLICK AGAIN");
}

function over1() //POR QUE NO FUNCIONAN DOS EVENTOS AL MISMO TIEMPO, ES DECIR ONCLICK CON OVERMOUSE ???
{
alert("i catched you");
}

function out1()
{
alert("you are out");
}
                    EVENETOS DE TECLADO
window.addEventListener("keypress",function(event){
    
    alert(String.fromCharCode(event.keyCode)) });

                    EVENTOS TIMER
var tiempo = setInterval(() => {
        document.write("setInterval se ejecuta indefinidamente <br>");
        
    }, 1000);

setTimeout(() => {
        document.write("SET TIMEOUT SOLO SE EJECUTA UNA VEZ")
        
    }, 1000);



/////////////////MULTIMEDIA/////////////////////////    

var v = document.querySelector(".vid");

v.addEventListener("seeking", function(){alert("adelantaste el video en:  "+this.currentTime)})// "ended" para agregar un evento cuando termina el video
// y "seeking" es el evento adelantar, "play" para cuando le dan play al video

var conf= confirm("NECESITA AYUDA");
if(conf){
window.location="help.html";
}else{

}
var p = prompt ("inserte su nombre");

document.write(p)

//CADENAS//

var a = 'hello coder'
document.write(a.length)

var A= new Array ('lunes', 'martes', 'miercoles');
var B= [];

var AF = Array.from(document.querySelectorAll('.arrayf p'));
var creacion = AF.map (dia => dia.textContent);
var cad = creacion.toString()
var Ar= cad.split(',')
Ar.sort();
Ar.reverse();
console.log(Ar);*/

class Gato
{
    constructor(nombre, edad, peso)
    {
        this.nombre=nombre
        this.edad=edad
        this.peso=peso
    }
    cor()
    {
        //document.write('el gato corre')
    }
}
var gato1 = new Gato ('beni','1', '3 kilos')
var gato2 = new Gato ('bigores','2', '4 kilos')

//HERENCIA
class veter extends Gato 
{
    constructor(nombre,salud,comida)
    {
        super(nombre)
        this.s=salud
        this.c=comida
    }
}
 var animal1 = new veter('benita', 10, 'buena')
 //document.write(animal1.nombre)

 //BOM & DOM
function wo(){
    ventana = window.open('help.html','_blank','width=100 height=100', 'resizable')
}
function c (){
    ventana.close()

}
function rss(){
    ventana.resizeTo(250, 250);                             // Resizes the new window
    ventana.focus(); 
     
}