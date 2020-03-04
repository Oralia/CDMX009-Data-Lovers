import data from './data/worldbank/worldbank.js';
// esta es una función de ejemplo

export const example = () => {
  return 'example';
};

//const infoPeru =worldbank.filer(info==>(info.countryName==='Perú')){
//return infoPeru;
//}
console.log(data);

let newdataPeru = data.PER.indicators.filter(indicator=>
  {
    return indicator.indicatorName.includes("mujeres") // regExp
  }

)
console.log(newdataPeru);

let newdataMexico = data.MEX.indicators.filter(indicator=>
  {
    return indicator.indicatorName.includes("mujeres")
  }

)
console.log(newdataMexico);

let newdataBrasil = data.BRA.indicators.filter(indicator=>
  {
    return indicator.indicatorName.includes("mujeres")
  }

)
console.log(newdataBrasil);

let newdataChile = data.CHL.indicators.filter(indicator=>
  {
    return indicator.indicatorName.includes("mujeres")
  }

)
console.log(newdataChile);
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

//let numeros=[1,2,3,4,5,6,7,8,9,0];
//let newnumeros=numeros.filter(item=>{return item>5})
//console.log(newnumeros);
//let newnumeros=numeros.filter(function(item){return item>5});
//console.log(newnumeros);
