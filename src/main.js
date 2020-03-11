import data from './data/worldbank/worldbank.js';
import {indicatorCountry} from './data.js';

console.log(data);



function menuInitial (){
  document.getElementById("screen").style.display="block";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="none";
  document.getElementById("screenMexico").style.display="none";
  document.getElementById("screenPeru").style.display="none";
}



function dataBrasil(){
  const countryData=data.BRA;
  //let type="empleo";

  indicatorCountry( countryData.value);
  //document.getElementById("indicatorsSelectBrasil").innerText=indicador;
  console.log (indicatorCountry);
  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="block";
  }

function dataChile(){
  const countryData=data.CHL;
  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="block";
}

function dataMexico(){
  const countryData=data.MEX;
  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="none";
  document.getElementById("screenMexico").style.display="block";
}

function dataPeru(){
  const countryData=data.PER;
  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="none";
  document.getElementById("screenMexico").style.display="none";
  document.getElementById("screenPeru").style.display="block";
}

//Funcion que despliega el menu en pantalla para brasil
//  for (let i = 0; i< countryData.indicators.length; i++) {
  //let indicatorList = document.getElementById("indicatorsSelectBrasil");
  //let indicator= document.createElement("option");
      //option.value = i;
  //indicator.text = countryData[i].indicatorName;
  //indicatorList.add(indicator);
//}

document.getElementById("menu").addEventListener("click",menuInitial);
document.getElementById("menu1").addEventListener("click",menuInitial);
document.getElementById("menu2").addEventListener("click",menuInitial);
document.getElementById("menu3").addEventListener("click",menuInitial);
document.getElementById("buttonBrasil").addEventListener("click",dataBrasil);
document.getElementById("buttonChile").addEventListener("click",dataChile);
document.getElementById("buttonMexico").addEventListener("click",dataMexico);
document.getElementById("buttonPeru").addEventListener("click",dataPeru);
