import data from './data/worldbank/worldbank.js';
// esta es una función de ejemplo
export const example = () => {
  return 'example';
};
let countryData=data.BRA;
let type="viole";

//function indicatorCountry (type,countryData){
  //Filtro que proporciona los indicadores para Brasil "Mujeres y Empleo"
  if (type==="empleo") {
      let newdataEmpleo = countryData.indicators.filter(indicators=>
        {
          return indicators.indicatorName.includes("mujeres")  && (indicators.indicatorName.includes("empleo")
          | indicators.indicatorName.includes("desempleadas")| indicators.indicatorName.includes("laboral"))

        })

        console.log(newdataEmpleo);

      //  función que retorna los nombres de los indicadores para Brasil "Mujeres y Empleo"
      for (var i = 0; i < newdataEmpleo.length; i++)
        {

          let indicatorEmpleo=newdataEmpleo[i].indicatorName;
          console.log(indicatorEmpleo);

        }
  }

  else if (type==="población") {
        //Filtro que proporciona los indicadores para Brasil "Mujeres y Población"

        let newdataPoblacion = countryData.indicators.filter(indicators=>
          {
            return indicators.indicatorName.includes("mujeres")  && indicators.indicatorName.includes("población")

          })

          console.log(newdataPoblacion);

        //  función que retorna los nombres de los indicadores para Brasil "Mujeres y Población"
        for (var i = 0; i < newdataPoblacion.length; i++)
          {
            let indicatorPoblacion=newdataPoblacion[i].indicatorName;
              console.log(indicatorPoblacion);
    }
  }

  else if (type==="educación") {
            //Filtro que proporciona los indicadores para Brasil "Mujeres y Educación"
          let newdataEducacion = countryData.indicators.filter(indicators=>
              {
                return indicators.indicatorName.includes("mujeres")  && (indicators.indicatorName.includes("alfabetización")
                | indicators.indicatorName.includes("alfabetizados")|| indicators.indicatorName.includes("escolar")
                | indicators.indicatorName.includes("escuela")| indicators.indicatorName.includes("instrucción")
                | indicators.indicatorName.includes("Educación")| indicators.indicatorName.includes("inscripciones")
                | indicators.indicatorName.includes("ingreso"))
              })

            console.log(newdataEducacion);

          //  función que retorna los nombres de los indicadores para Brasil "Mujeres y Educación"
          for (var i = 0; i < newdataEducacion.length; i++)
              {
                let indicatorEducacion=newdataEducacion[i].indicatorName;
                console.log(indicatorEducacion);
              }
  }

  else if (type==="salud") {
            //Filtro que proporciona los indicadores para Brasil "Mujeres y Salud"
          let newdataSalud = countryData.indicators.filter(indicators=>
              {
                  return indicators.indicatorName.includes("mujeres")  && (indicators.indicatorName.includes("Prevalencia")
                  | indicators.indicatorName.includes("nacer") || indicators.indicatorName.includes("anticoncepción"))
              })
              console.log(newdataSalud);

          //  función que retorna los nombres de los indicadores para Brasil "Mujeres y Salud"
          for (var i = 0; i < newdataSalud.length; i++)
              {
                let indicatorSalud=newdataSalud[i].indicatorName;
                console.log(indicatorSalud);
              }
  }

  else if (type==="violencia") {
          //Filtro que proporciona los indicadores para Brasil "Mujeres y violencia"
          let newdataViolencia = countryData.indicators.filter(indicators=>
              {
                  return (indicators.indicatorName.includes("mujeres")|indicators.indicatorName.includes("Mujeres"))  && (indicators.indicatorName.includes("violencia")
                  | indicators.indicatorName.includes("casaron")| indicators.indicatorName.includes("golpee"))
              })
              console.log(newdataViolencia);

          //  función que retorna los nombres de los indicadores para Brasil "Mujeres y violencia"
          for (var i = 0; i < newdataViolencia.length; i++)
              {
                  let indicatorViolencia=newdataViolencia[i].indicatorName;
                console.log(indicatorViolencia);
              }
  }
  else {
        //Filtro que proporciona los indicadores para Brasil "Mujeres y Negocios"
        let newdataNegocios = countryData.indicators.filter(indicators=>
            {
                return indicators.indicatorName.includes("mujeres") && (indicators.indicatorName.includes("iniciar")
                | indicators.indicatorName.includes("Independientes")| indicators.indicatorName.includes("propiedad"))
            })
        console.log(newdataNegocios);

      //  función que retorna los nombres de los indicadores para Brasil "Mujeres y Negocios"
      for (var i = 0; i < newdataNegocios.length; i++)
          {
              let indicatorNegocios=newdataNegocios[i].indicatorName;
            console.log(indicatorNegocios);
          }

  }
//}      //Esto debe ir en el main.js
          //Funcion que despliega el menu en pantalla para brasil
          //for (let i = 0; i < newdataBrasil.length; i++) {
          //let indicatorList = document.getElementById("indicatorsSelectBrasil");
          //let indicator= document.createElement("option");
          //option.value = i;
          //indicator.text = newdataBrasil[i].indicatorName;
          //indicatorList.add(indicator);

          //}
