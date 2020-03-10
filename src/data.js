import data from './data/worldbank/worldbank.js';
// esta es una función de ejemplo

export const example = () => {
  return 'example';
};

//Filtro que proporciona los indicadores para Brasil "Mujeres y Empleo"

let newdataBrasilEmpleo = data.BRA.indicators.filter(indicators=>
  {
    return indicators.indicatorName.includes("mujeres")  && (indicators.indicatorName.includes("empleo")
    | indicators.indicatorName.includes("desempleadas")| indicators.indicatorName.includes("laboral"))

  })

  console.log(newdataBrasilEmpleo);

//  función que retorna los nombres de los indicadores para Brasil "Mujeres y Empleo"
for (var i = 0; i < newdataBrasilEmpleo.length; i++)
  {

    let indicatorBrasilEmpleo=newdataBrasilEmpleo[i].indicatorName;
    console.log(indicatorBrasilEmpleo);

  }
//Filtro que proporciona los indicadores para Brasil "Mujeres y Población"

let newdataBrasilPoblacion = data.BRA.indicators.filter(indicators=>
  {
    return indicators.indicatorName.includes("mujeres")  && indicators.indicatorName.includes("población")

  })

  console.log(newdataBrasilPoblacion);

//  función que retorna los nombres de los indicadores para Brasil "Mujeres y Población"
for (var i = 0; i < newdataBrasilPoblacion.length; i++)
  {
    let indicatorBrasilPoblacion=newdataBrasilPoblacion[i].indicatorName;
      console.log(indicatorBrasilPoblacion);
  }

//Filtro que proporciona los indicadores para Brasil "Mujeres y Educación"
let newdataBrasilEducacion = data.BRA.indicators.filter(indicators=>
    {
      return indicators.indicatorName.includes("mujeres")  && (indicators.indicatorName.includes("alfabetización")
      | indicators.indicatorName.includes("alfabetizados")|| indicators.indicatorName.includes("escolar")
      | indicators.indicatorName.includes("escuela")| indicators.indicatorName.includes("instrucción")
      | indicators.indicatorName.includes("Educación")| indicators.indicatorName.includes("inscripciones")
      | indicators.indicatorName.includes("ingreso"))
    })

  console.log(newdataBrasilEducacion);

//  función que retorna los nombres de los indicadores para Brasil "Mujeres y Educación"
for (var i = 0; i < newdataBrasilEducacion.length; i++)
    {
      let indicatorBrasilEducacion=newdataBrasilEducacion[i].indicatorName;
      console.log(indicatorBrasilEducacion);
    }

//Filtro que proporciona los indicadores para Brasil "Mujeres y Salud"
let newdataBrasilSalud = data.BRA.indicators.filter(indicators=>
    {
        return indicators.indicatorName.includes("mujeres")  && (indicators.indicatorName.includes("Prevalencia")
        | indicators.indicatorName.includes("nacer") || indicators.indicatorName.includes("anticoncepción"))
    })
    console.log(newdataBrasilSalud);

//  función que retorna los nombres de los indicadores para Brasil "Mujeres y Salud"
for (var i = 0; i < newdataBrasilSalud.length; i++)
    {
      let indicatorBrasilSalud=newdataBrasilSalud[i].indicatorName;
      console.log(indicatorBrasilSalud);
    }
//Filtro que proporciona los indicadores para Brasil "Mujeres y violencia"
let newdataBrasilViolencia = data.BRA.indicators.filter(indicators=>
    {
        return (indicators.indicatorName.includes("mujeres")|indicators.indicatorName.includes("Mujeres"))  && (indicators.indicatorName.includes("violencia")
        | indicators.indicatorName.includes("casaron")| indicators.indicatorName.includes("golpee"))
    })
    console.log(newdataBrasilViolencia);

//  función que retorna los nombres de los indicadores para Brasil "Mujeres y violencia"
for (var i = 0; i < newdataBrasilViolencia.length; i++)
    {
        let indicatorBrasilViolencia=newdataBrasilViolencia[i].indicatorName;
      console.log(indicatorBrasilViolencia);
    }

//Filtro que proporciona los indicadores para Brasil "Mujeres y Negocios"
  let newdataBrasilNegocios = data.BRA.indicators.filter(indicators=>
      {
          return indicators.indicatorName.includes("mujeres") && (indicators.indicatorName.includes("iniciar")
          | indicators.indicatorName.includes("Independientes")| indicators.indicatorName.includes("propiedad"))
      })
  console.log(newdataBrasilNegocios);

//  función que retorna los nombres de los indicadores para Brasil "Mujeres y Negocios"
for (var i = 0; i < newdataBrasilNegocios.length; i++)
    {
        let indicatorBrasilNegocios=newdataBrasilNegocios[i].indicatorName;
      console.log(indicatorBrasilNegocios);
    }
          //Esto debe ir en el main.js
          //Funcion que despliega el menu en pantalla para brasil
          //for (let i = 0; i < newdataBrasil.length; i++) {
          //let indicatorList = document.getElementById("indicatorsSelectBrasil");
          //let indicator= document.createElement("option");
          //option.value = i;
          //indicator.text = newdataBrasil[i].indicatorName;
          //indicatorList.add(indicator);

          //}
//Filtro que prporciona los indicadores que contienen la palabra mujer en un pais

let newdataChile = data.MEX.indicators.filter(indicator=>
    {
      return indicator.indicatorName.includes("mujeres")
    })
    //console.log(newdataChile);

//  función que retorna los nombres de los indicadores para Chile
for (var i = 0; i < newdataChile.length; i++)
    {
        let indicatorChile=newdataChile[i].indicatorName;
      //  console.log(indicatorChile);
      }
