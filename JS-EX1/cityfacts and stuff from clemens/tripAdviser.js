 function cityFacts(cityObjArr) {
   let cityObjName= cityObjArr[0];
   let cityObjPop= cityObjArr[0];
   let cityObjContinent= cityObjArr[0];
    for(i=0;i<cityObjArr.length; i++){
     // document.write(cityObjArr[i].name);
       if(cityObjArr[i].continent == "Europe"){
         cityObjContinent= cityObjArr[i];
       }
       if(cityObjArr[i].name == cityObjName.name){
        cityObjName= cityObjArr[i];
        //document.write(cityObj.name);
      }
      if(cityObjArr[i].population< cityObjPop.population){
        cityObj= cityObjArr[i];
        //document.write(cityObj.name);
      }
    }

   return `If you want to visit a city on the continent ${cityObjContinent.continent}, 
   travel to ${cityObjContinent.name}. If you want to travel to the city with the 
   lowest population, your target is ${cityObjPop.name}. 
   and is situated in ${cityObj.continent}` 
   }

   let city1={name:"Hamburg", population:1800000, continent:"Europe"};
    let city2={name:"Pinneberg", population:7, continent:"Europe"};
    let city3={name:"Enterprise", population:186, continent:"America"};
    let cityArr=[city1,city2,city3];

    document.write(cityFacts(cityArr));
   // console.log(cityFacts(cityArr));
   
