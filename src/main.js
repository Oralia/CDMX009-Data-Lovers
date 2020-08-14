import data from "./data/worldbank/worldbank.js";
import {
  educación,
  empleo,
  negocios,
  población,
  salud,
  violencia,
} from "./data.js";

let countryData = [];
let dataChart = [];

//Funcion que muestra los indicadores para Educación
function showIndicatorEducacion() {
  document.getElementById("screenIndicatorEducacion").style.display = "none";
  document.getElementById("screenIndicatorEducacion2").style.display = "block";

  for (let i = 0; i < educación(countryData).length; i++) {
    let indicatorList = document.getElementById("indicatorEducacion");
    let option = document.createElement("option");
    option.text = educación(countryData)[i].indicatorName;
    indicatorList.add(option);
  }
}

//Funcion que muestra los indicadores para empleo
function showIndicatorEmpleo() {
  document.getElementById("screenIndicatorEducacion").style.display = "block";
  document.getElementById("screenIndicatorEducacion2").style.display = "none";
  document.getElementById("screenIndicatorEmpleo").style.display = "none";
  document.getElementById("screenIndicatorEmpleo2").style.display = "block";

  for (let i = 0; i < empleo(countryData).length; i++) {
    let indicatorList = document.getElementById("indicatorEmpleo");
    let option = document.createElement("option");
    //option.value = i;
    option.text = empleo(countryData)[i].indicatorName;
    indicatorList.add(option);
  }
}

//Funcion que muestra los indicadores para Negocios
function showIndicatorNegocios() {
  document.getElementById("screenIndicatorEducacion").style.display = "block";
  document.getElementById("screenIndicatorEducacion2").style.display = "none";
  document.getElementById("screenIndicatorEmpleo").style.display = "block";
  document.getElementById("screenIndicatorEmpleo2").style.display = "none";
  document.getElementById("screenIndicatorNegocios").style.display = "none";
  document.getElementById("screenIndicatorNegocios2").style.display = "block";

  for (let i = 0; i < negocios(countryData).length; i++) {
    let indicatorList = document.getElementById("indicatorNegocios");
    let option = document.createElement("option");
    //option.value = i;
    option.text = negocios(countryData)[i].indicatorName;
    indicatorList.add(option);
  }
}

//Funcion que muestra los indicadores para población
function showIndicatorPoblacion() {
  document.getElementById("screenIndicatorEducacion").style.display = "block";
  document.getElementById("screenIndicatorEducacion2").style.display = "none";
  document.getElementById("screenIndicatorEmpleo").style.display = "block";
  document.getElementById("screenIndicatorEmpleo2").style.display = "none";
  document.getElementById("screenIndicatorNegocios").style.display = "block";
  document.getElementById("screenIndicatorNegocios2").style.display = "none";
  document.getElementById("screenIndicatorPoblación").style.display = "none";
  document.getElementById("screenIndicatorPoblación2").style.display = "block";

  for (let i = 0; i < población(countryData).length; i++) {
    let indicatorList = document.getElementById("indicatorPoblacion");
    let option = document.createElement("option");
    //option.value = i;
    option.text = población(countryData)[i].indicatorName;
    indicatorList.add(option);
  }
}

//Funcion que muestra los indicadores para salud
function showIndicatorSalud() {
  document.getElementById("screenIndicatorEducacion").style.display = "block";
  document.getElementById("screenIndicatorEducacion2").style.display = "none";
  document.getElementById("screenIndicatorEmpleo").style.display = "block";
  document.getElementById("screenIndicatorEmpleo2").style.display = "none";
  document.getElementById("screenIndicatorNegocios").style.display = "block";
  document.getElementById("screenIndicatorNegocios2").style.display = "none";
  document.getElementById("screenIndicatorPoblación").style.display = "block";
  document.getElementById("screenIndicatorPoblación2").style.display = "none";
  document.getElementById("screenIndicatorSalud").style.display = "none";
  document.getElementById("screenIndicatorSalud2").style.display = "block";

  for (let i = 0; i < salud(countryData).length; i++) {
    let indicatorList = document.getElementById("indicatorSalud");
    let option = document.createElement("option");
    //option.value = i;
    option.text = salud(countryData)[i].indicatorName;
    indicatorList.add(option);
  }
}

// Funcion que muestra los indicadores para violencia
function showIndicatorViolencia() {
  document.getElementById("screenIndicatorEducacion").style.display = "block";
  document.getElementById("screenIndicatorEducacion2").style.display = "none";
  document.getElementById("screenIndicatorEmpleo").style.display = "block";
  document.getElementById("screenIndicatorEmpleo2").style.display = "none";
  document.getElementById("screenIndicatorNegocios").style.display = "block";
  document.getElementById("screenIndicatorNegocios2").style.display = "none";
  document.getElementById("screenIndicatorPoblación").style.display = "block";
  document.getElementById("screenIndicatorPoblación2").style.display = "none";
  document.getElementById("screenIndicatorSalud").style.display = "block";
  document.getElementById("screenIndicatorSalud2").style.display = "none";
  document.getElementById("screenIndicatorViolencia").style.display = "none";
  document.getElementById("screenIndicatorViolencia2").style.display = "block";

  for (let i = 0; i < violencia(countryData).length; i++) {
    let indicatorList = document.getElementById("indicatorViolencia");
    let option = document.createElement("option");
    option.text = violencia(countryData)[i].indicatorName;
    indicatorList.add(option);
  }
}

// Funcion que grafica el data para educación
function graficarEducacion() {
  //obtiene le valor de la opcion seleccionada
  var x = document.getElementById("indicatorEducacion").selectedIndex;
  //Nombre del Indicator seleccionado
  var y = document.getElementById("indicatorEducacion").options;

  // se expresa x-1 ya que los arrays incian en 0
  //"i", y[x-1].index ;
  //"indicador", y[x].text
  let years = Object.keys(educación(countryData)[y[x - 1].index].data);
  let datos = Object.values(educación(countryData)[y[x - 1].index].data);
  console.log("data", datos);
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: years,
      datasets: [
        {
          label: y[x].text,
          data: datos,
          backgroundColor: ["rgb(74, 135, 72,0.5)", "rgb(229, 89, 50,0.5)"],
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

function graficarEmpleo() {
  //obtiene le valor de la opcion seleccionada
  var x = document.getElementById("indicatorEmpleo").selectedIndex;
  //Nombre del Indicator seleccionado
  var y = document.getElementById("indicatorEmpleo").options;
  // se expresa x-1 ya que los arrays incian en 0
  //"i", y[x-1].index ;
  //"indicador", y[x].text;
  let years = Object.keys(empleo(countryData)[y[x - 1].index].data);
  let datos = Object.values(empleo(countryData)[y[x - 1].index].data);
  console.log("data", datos);
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: years,
      datasets: [
        {
          label: y[x].text,
          data: datos,
          backgroundColor: ["rgb(74, 135, 72,0.5)", "rgb(229, 89, 50,0.5)"],
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

function graficarNegocios() {
  //obtiene le valor de la opcion seleccionada
  var x = document.getElementById("indicatorNegocios").selectedIndex;
  //Nombre del Indicator seleccionado
  var y = document.getElementById("indicatorNegocios").options;
  // se expresa x-1 ya que los arrays incian en 0
  //"i", y[x-1].index ;
  //"indicador", y[x].text;
  let years = Object.keys(negocios(countryData)[y[x - 1].index].data);
  let datos = Object.values(negocios(countryData)[y[x - 1].index].data);
  console.log("data", datos);
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: years,
      datasets: [
        {
          label: y[x].text,
          data: datos,
          backgroundColor: ["rgb(74, 135, 72,0.5)", "rgb(229, 89, 50,0.5)"],
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

function graficarPoblacion() {
  //obtiene le valor de la opcion seleccionada
  var x = document.getElementById("indicatorPoblacion").selectedIndex;
  //Nombre del Indicator seleccionado
  var y = document.getElementById("indicatorPoblacion").options;
  // se expresa x-1 ya que los arrays incian en 0
  //"i", y[x-1].index ;
  //"indicador", y[x].text;
  let years = Object.keys(población(countryData)[y[x - 1].index].data);
  let datos = Object.values(población(countryData)[y[x - 1].index].data);
  console.log("data", datos);
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: years,
      datasets: [
        {
          label: y[x].text,
          data: datos,
          backgroundColor: ["rgb(74, 135, 72,0.5)", "rgb(229, 89, 50,0.5)"],
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

function graficarSalud() {
  //obtiene le valor de la opcion seleccionada
  var x = document.getElementById("indicatorSalud").selectedIndex;
  //Nombre del Indicator seleccionado
  var y = document.getElementById("indicatorSalud").options;
  // se expresa x-1 ya que los arrays incian en 0
  //"i", y[x-1].index ;
  //"indicador", y[x].text;
  let years = Object.keys(salud(countryData)[y[x - 1].index].data);
  let datos = Object.values(salud(countryData)[y[x - 1].index].data);
  console.log("data", datos);
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: years,
      datasets: [
        {
          label: y[x].text,
          data: datos,
          backgroundColor: ["rgb(74, 135, 72,0.5)", "rgb(229, 89, 50,0.5)"],
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

function graficarViolencia() {
  //obtiene le valor de la opcion seleccionada
  var x = document.getElementById("indicatorViolencia").selectedIndex;
  //Nombre del Indicator seleccionado
  var y = document.getElementById("indicatorViolencia").options;
  // se expresa x-1 ya que los arrays incian en 0
  //"i", y[x-1].index ;
  //"indicador", y[x].text;
  let years = Object.keys(violencia(countryData)[y[x - 1].index].data);
  let datos = Object.values(violencia(countryData)[y[x - 1].index].data);
  console.log("data", datos);
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: years,
      datasets: [
        {
          label: y[x].text,
          data: datos,
          backgroundColor: ["rgb(74, 135, 72,0.5)", "rgb(229, 89, 50,0.5)"],
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

function menuInitial() {
  document.getElementById("screen").style.display = "block";
  document.getElementById("screenBrasil").style.display = "none";
  document.getElementById("screenChile").style.display = "none";
  document.getElementById("screenMexico").style.display = "none";
  document.getElementById("screenPeru").style.display = "none";
  document.getElementById("screenIndicators").style.display = "none";
}

function dataBrasil() {
  countryData = data.BRA;

  document
    .getElementById("EducacionButton")
    .addEventListener("click", showIndicatorEducacion);
  document
    .getElementById("graficarEducacion")
    .addEventListener("click", graficarEducacion);
  document
    .getElementById("EmpleoButton")
    .addEventListener("click", showIndicatorEmpleo);
  document
    .getElementById("graficarEmpleo")
    .addEventListener("click", graficarEmpleo);
  document
    .getElementById("NegociosButton")
    .addEventListener("click", showIndicatorNegocios);
  document
    .getElementById("graficarNegocios")
    .addEventListener("click", graficarNegocios);
  document
    .getElementById("PoblaciónButton")
    .addEventListener("click", showIndicatorPoblacion);
  document
    .getElementById("graficarPoblacion")
    .addEventListener("click", graficarPoblacion);
  document
    .getElementById("SaludButton")
    .addEventListener("click", showIndicatorSalud);
  document
    .getElementById("graficarSalud")
    .addEventListener("click", graficarSalud);
  document
    .getElementById("ViolenciaButton")
    .addEventListener("click", showIndicatorViolencia);
  document
    .getElementById("graficarViolencia")
    .addEventListener("click", graficarViolencia);

  document.getElementById("screen").style.display = "none";
  document.getElementById("screenBrasil").style.display = "block";
  document.getElementById("screenIndicators").style.display = "block";
}

function dataChile() {
  countryData = data.CHL;

  document
    .getElementById("EducacionButton")
    .addEventListener("click", showIndicatorEducacion);
  document
    .getElementById("graficarEducacion")
    .addEventListener("click", graficarEducacion);
  document
    .getElementById("EmpleoButton")
    .addEventListener("click", showIndicatorEmpleo);
  document
    .getElementById("graficarEmpleo")
    .addEventListener("click", graficarEmpleo);
  document
    .getElementById("NegociosButton")
    .addEventListener("click", showIndicatorNegocios);
  document
    .getElementById("graficarNegocios")
    .addEventListener("click", graficarNegocios);
  document
    .getElementById("PoblaciónButton")
    .addEventListener("click", showIndicatorPoblacion);
  document
    .getElementById("graficarPoblacion")
    .addEventListener("click", graficarPoblacion);
  document
    .getElementById("SaludButton")
    .addEventListener("click", showIndicatorSalud);
  document
    .getElementById("graficarSalud")
    .addEventListener("click", graficarSalud);
  document
    .getElementById("ViolenciaButton")
    .addEventListener("click", showIndicatorViolencia);
  document
    .getElementById("graficarViolencia")
    .addEventListener("click", graficarViolencia);
  document.getElementById("screen").style.display = "none";
  document.getElementById("screenBrasil").style.display = "none";
  document.getElementById("screenChile").style.display = "block";
  document.getElementById("screenIndicators").style.display = "block";
}

function dataMexico() {
  countryData = data.MEX;

  document
    .getElementById("EducacionButton")
    .addEventListener("click", showIndicatorEducacion);
  document
    .getElementById("graficarEducacion")
    .addEventListener("click", graficarEducacion);
  document
    .getElementById("EmpleoButton")
    .addEventListener("click", showIndicatorEmpleo);
  document
    .getElementById("graficarEmpleo")
    .addEventListener("click", graficarEmpleo);
  document
    .getElementById("NegociosButton")
    .addEventListener("click", showIndicatorNegocios);
  document
    .getElementById("graficarNegocios")
    .addEventListener("click", graficarNegocios);
  document
    .getElementById("PoblaciónButton")
    .addEventListener("click", showIndicatorPoblacion);
  document
    .getElementById("graficarPoblacion")
    .addEventListener("click", graficarPoblacion);
  document
    .getElementById("SaludButton")
    .addEventListener("click", showIndicatorSalud);
  document
    .getElementById("graficarSalud")
    .addEventListener("click", graficarSalud);
  document
    .getElementById("ViolenciaButton")
    .addEventListener("click", showIndicatorViolencia);
  document
    .getElementById("graficarViolencia")
    .addEventListener("click", graficarViolencia);

  document.getElementById("screen").style.display = "none";
  document.getElementById("screenBrasil").style.display = "none";
  document.getElementById("screenChile").style.display = "none";
  document.getElementById("screenMexico").style.display = "block";
  document.getElementById("screenIndicators").style.display = "block";
}

function dataPeru() {
  countryData = data.PER;

  document
    .getElementById("EducacionButton")
    .addEventListener("click", showIndicatorEducacion);
  document
    .getElementById("graficarEducacion")
    .addEventListener("click", graficarEducacion);
  document
    .getElementById("EmpleoButton")
    .addEventListener("click", showIndicatorEmpleo);
  document
    .getElementById("graficarEmpleo")
    .addEventListener("click", graficarEmpleo);
  document
    .getElementById("NegociosButton")
    .addEventListener("click", showIndicatorNegocios);
  document
    .getElementById("graficarNegocios")
    .addEventListener("click", graficarNegocios);
  document
    .getElementById("PoblaciónButton")
    .addEventListener("click", showIndicatorPoblacion);
  document
    .getElementById("graficarPoblacion")
    .addEventListener("click", graficarPoblacion);
  document
    .getElementById("SaludButton")
    .addEventListener("click", showIndicatorSalud);
  document
    .getElementById("graficarSalud")
    .addEventListener("click", graficarSalud);
  document
    .getElementById("ViolenciaButton")
    .addEventListener("click", showIndicatorViolencia);
  document
    .getElementById("graficarViolencia")
    .addEventListener("click", graficarViolencia);

  document.getElementById("screen").style.display = "none";
  document.getElementById("screenBrasil").style.display = "none";
  document.getElementById("screenChile").style.display = "none";
  document.getElementById("screenMexico").style.display = "none";
  document.getElementById("screenPeru").style.display = "block";
  document.getElementById("screenIndicators").style.display = "block";
}

document.getElementById("menu").addEventListener("click", menuInitial);
document.getElementById("buttonBrasil").addEventListener("click", dataBrasil);
document.getElementById("buttonChile").addEventListener("click", dataChile);
document.getElementById("buttonMexico").addEventListener("click", dataMexico);
document.getElementById("buttonPeru").addEventListener("click", dataPeru);
