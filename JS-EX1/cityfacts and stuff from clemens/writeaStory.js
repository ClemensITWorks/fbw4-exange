 function cityFacts(cityObjArr) {
   let cityObj= cityObjArr[0];
    for(i=0;i<cityObjArr.length; i++){
     // document.write(cityObjArr[i].name);
       if(cityObjArr[i].continent == "Europe" && cityObjArr[i].population< cityObj.population){
         cityObj= cityObjArr[i];
         //document.write(cityObj.name);
       }
    }

   return `${cityObj.name} has a population of ${cityObj.population} 
   and is situated in ${cityObj.continent}` 
   }

   let city1={name:"Hamburg", population:1800000, continent:"Europe"};
    let city2={name:"Pinneberg", population:7, continent:"Europe"};
    let city3={name:"Enterprise", population:186, continent:"America"};
    let cityArr=[city1,city2,city3];

    document.write(cityFacts(cityArr));
   // console.log(cityFacts(cityArr));
   
