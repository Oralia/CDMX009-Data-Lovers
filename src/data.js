import data from './data/worldbank/worldbank.js';
// esta es una función de ejemplo
export const example = () => {
  return 'example';
};
console.log(data);
//export const indicatorCountry =(countryData)=>{
//Filtro que proporciona los indicadores para Brasil "Mujeres y Empleo"
const countryData=data.CHL;
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
    for (let i = 0; i < newdataEmpleo.length; i++) {
      let indicatorList = document.getElementById("indicatorsSelectEmpleo");
      let option = document.createElement("option");
      //option.value = i;
      option.text = indicatorEmpleo;
      indicatorList.add(option);
    }


  }


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
    //}

    for (let i = 0; i < newdataPoblacion.length; i++) {
      let indicatorList = document.getElementById("indicatorsSelectPoblacion");
      let option = document.createElement("option");
      //option.value = i;
      option.text = newdataPoblacion[i].indicatorName;
      indicatorList.add(option);
    }

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

      for (let i = 0; i < newdataEducacion.length; i++) {
        let indicatorList = document.getElementById("indicatorsSelectEducacion");
        let option = document.createElement("option");
        //option.value = i;
        option.text =newdataEducacion[i].indicatorName;
        indicatorList.add(option);
      }

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
        for (let i = 0; i < newdataSalud.length; i++) {
          let indicatorList = document.getElementById("indicatorsSelectSalud");
          let option = document.createElement("option");
          //option.value = i;
          option.text = newdataSalud[i].indicatorName;
          indicatorList.add(option);
        }

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
          for (let i = 0; i < newdataViolencia.length; i++) {
            let indicatorList = document.getElementById("indicatorsSelectViolencia");
            let option = document.createElement("option");
            //option.value = i;
            option.text = newdataViolencia[i].indicatorName;
            indicatorList.add(option);
          }

          //Filtro que proporciona los indicadores para Brasil "Mujeres y Negocios"
          let newdataNegocios =countryData.indicators.filter(indicators=>
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
            for (let i = 0; i < newdataNegocios.length; i++) {
              let indicatorList = document.getElementById("indicatorsSelectNegocios");
              let option = document.createElement("option");
              //option.value = i;
              option.text = newdataNegocios[i].indicatorName;
              indicatorList.add(option);
            }

  //}
