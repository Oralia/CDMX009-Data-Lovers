import data from './data/worldbank/worldbank.js';
import {empleo, población} from './data.js';



function menuInitial (){
  document.getElementById("screen").style.display="block";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="none";
  document.getElementById("screenMexico").style.display="none";
  document.getElementById("screenPeru").style.display="none";
  document.getElementById("screenIndicators").style.display="none";
}


function dataBrasil(){

let countryData=data.BRA;

  var text = "<ul>";
  for ( var i = 0; i < empleo(countryData).length; i++) {
  text += "<li>" + empleo(countryData)[i]+ "</li>";
  }

/*for ( var i = 0; i < población(countryData).length; i++) {
 text += "<li>" + población(countryData)[i] + "</li>";
}*/
 text += "</ul>";

  document.getElementById("Empleo").innerHTML = text;
  //document.getElementById("empleo").innerHTML = text;



    /*for (let i = 0; i < población(countryData).length; i++) {
    let indicatorList = document.getElementById("indicatorsSelectPoblacion");
    let option = document.createElement("option");
    option.text = población(countryData)[i].indicatorName;
    indicatorList.add(option);
}*/
  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="block";
  document.getElementById("screenIndicators").style.display="block";
}

function dataChile(){
  //const countryData=data.CHL;
  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="block";
  document.getElementById("screenIndicators").style.display="block";
}


function dataMexico(){
  //const countryData=data.MEX;
  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="none";
  document.getElementById("screenMexico").style.display="block";
  document.getElementById("screenIndicators").style.display="block";

}

function dataPeru(){
  //const countryData=data.PER;
  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="none";
  document.getElementById("screenMexico").style.display="none";
  document.getElementById("screenPeru").style.display="block";
  document.getElementById("screenIndicators").style.display="block";

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
document.getElementById("buttonBrasil").addEventListener("click",dataBrasil());
document.getElementById("buttonChile").addEventListener("click",dataChile);
document.getElementById("buttonMexico").addEventListener("click",dataMexico);
document.getElementById("buttonPeru").addEventListener("click",dataPeru);
