import { example } from './data.js';

console.log(example);

function menuInitial (){
  document.getElementById("screen").style.display="block";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="none";
  document.getElementById("screenMexico").style.display="none";
  document.getElementById("screenPeru").style.display="none";
}

function dataBrasil(){
  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="block";
  }

function dataChile(){
  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="block";
}

function dataMexico(){
  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="none";
  document.getElementById("screenMexico").style.display="block";
}

function dataPeru(){
  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="none";
  document.getElementById("screenMexico").style.display="none";
  document.getElementById("screenPeru").style.display="block";
}

document.getElementById("menu").addEventListener("click",menuInitial);
document.getElementById("menu1").addEventListener("click",menuInitial);
document.getElementById("menu2").addEventListener("click",menuInitial);
document.getElementById("menu3").addEventListener("click",menuInitial);
document.getElementById("buttonBrasil").addEventListener("click",dataBrasil);
document.getElementById("buttonChile").addEventListener("click",dataChile);
document.getElementById("buttonMexico").addEventListener("click",dataMexico);
document.getElementById("buttonPeru").addEventListener("click",dataPeru);
