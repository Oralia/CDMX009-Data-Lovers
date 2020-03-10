import data from './data/worldbank/worldbank.js';
// esta es una función de ejemplo

export const example = () => {
  return 'example';
};
console.log(data);

//Filtro que prporciona los ndicadores que contienen la palabra mujer en Peru

let newdataBrasil = data.BRA.indicators.filter(indicators=>
  {
    return indicators.indicatorName.includes("mujeres")  && indicators.indicatorName.includes("Educación") // regExp
  })

  console.log(newdataBrasil);

  //Funcion que retorna los nombres de los indicadores para Peru
  //for (var i = 0; i < newdataBrasil.length; i++)
  //{

  //let indicatorPeru=newdataBrasil[i].indicatorName;
  //console.log(indicatorsSelectBrasil);

  //}

  for (let i = 0; i < newdataBrasil.length; i++) {
    let indicatorList = document.getElementById("indicatorsSelectBrasil");
    let indicator= document.createElement("option");
    //option.value = i;
    indicator.text = newdataBrasil[i].indicatorName;
    indicatorList.add(indicator);

  }
//Probando para subir

  //Filtro que prporciona los indicadores que contienen la palabra mujer en Mexico

  //let newdataMexico = data.MEX.indicators.filter(indicator=>
  //{
  //return indicator.indicatorName.includes("mujeres")
  //}

  //)
  //console.log(newdataMexico);

  //Filtro que prporciona los ndicadores que contienen la palabra mujer en Brasil

  //let newdataBrasil = data.BRA.indicators.filter(indicator=>
  //  {
  //  return indicator.indicatorName.includes("mujeres")
  //}

  //)
  //console.log(newdataBrasil);

  //Filtro que prporciona los ndicadores que contienen la palabra mujer en Chile

  //let newdataChile = data.CHL.indicators.filter(indicator=>
  //{
  //return indicator.indicatorName.includes("mujeres")
  //}

  //)
  //console.log(newdataChile);

  //Para visualizar que hay en data
  //console.log(datos(data));


  //Funcion que muestra el contenido de indicadores de Peru

  //function datosPerIn(obj) {
  //return data.PER.indicators;
  //}
  //console.log(datosPerIn(data.PER.indicators));
  //Imprimir
  //function datosPerIn(obj) {
  //  return data.PER.indicators;
  //}
  //console.log(datosPerIn(data.PER.indicators));

  //Funcion que indica que los keys de indicadores de Mexico

  //function datosMex(obj) {
  //return data.MEX.indicators;
  //}

  //console.log(datosMex(data.MEX.indicators));
