import data from './data/worldbank/worldbank.js';

export { educación, empleo, negocios, población, salud, violencia};


//Filtro que proporciona los indicadores de "Mujeres y Educación"
//console.log(data.PER.indicators);
function educación(countryData){
let newdataEducacion=[];

  newdataEducacion = countryData.indicators.filter(indicators=>
  {
  return indicators.indicatorName.includes("mujeres")  && (indicators.indicatorName.includes("alfabetización")
  | indicators.indicatorName.includes("alfabetizados")|| indicators.indicatorName.includes("escolar")
  | indicators.indicatorName.includes("escuela")| indicators.indicatorName.includes("instrucción")
  | indicators.indicatorName.includes("Educación")| indicators.indicatorName.includes("inscripciones")
  | indicators.indicatorName.includes("ingreso"))
})

return newdataEducacion;

}







//Filtro que proporciona los indicadores de "Mujeres y Empleo"
function empleo (countryData){
  let newdataEmpleo=[];
  let indicatorEmpleo=[];
  newdataEmpleo = countryData.indicators.filter(indicators=>
    {
      return indicators.indicatorName.includes("mujeres")  && indicators.indicatorName.includes("empleo")
      | indicators.indicatorName.includes("desempleadas")| indicators.indicatorName.includes("laboral")

    })
  return newdataEmpleo;
  }

  //Filtro que proporciona los indicadores de "Mujeres y Negocios"
  function negocios(countryData){
  let newdataNegocios=[];
  let indicatorNegocios=[];

  newdataNegocios =countryData.indicators.filter(indicators=>
  {
  return indicators.indicatorName.includes("mujeres") && (indicators.indicatorName.includes("iniciar")
  | indicators.indicatorName.includes("Independientes")| indicators.indicatorName.includes("propiedad"))
  })

  return newdataNegocios;
  }


  // //Filtro que proporciona los indicadores de "Mujeres y Población"

  function población(countryData){
    let newdataPoblacion=[];
    let indicatorPoblacion=[];
    newdataPoblacion = countryData.indicators.filter(indicators=>
      {
        return indicators.indicatorName.includes("mujeres")  && indicators.indicatorName.includes("población")

      })
      return newdataPoblacion;
  }




//Filtro que proporciona los indicadores de "Mujeres y Salud"
function salud (countryData){
let newdataSalud=[];
let indicatorSalud=[];

newdataSalud = countryData.indicators.filter(indicators=>
{
return indicators.indicatorName.includes("mujeres")  && (indicators.indicatorName.includes("Prevalencia")
| indicators.indicatorName.includes("nacer") || indicators.indicatorName.includes("anticoncepción"))
})

return newdataSalud;
}

//Filtro que proporciona los indicadores de "Mujeres y violencia"
function violencia (countryData){
let newdataViolencia =[];
let indicatorViolencia =[];

newdataViolencia = countryData.indicators.filter(indicators=>
{
return (indicators.indicatorName.includes("mujeres")|indicators.indicatorName.includes("Mujeres"))  && (indicators.indicatorName.includes("violencia")
| indicators.indicatorName.includes("casaron")| indicators.indicatorName.includes("golpee"))
})

return newdataViolencia;
}
