function isItThere(sntnc,srchTrm,rplcBy) {
if (sntnc.includes(srchTrm)){
   return (sntnc.replace(srchTrm,rplcBy))
}
else{return ("i cant find the word "+srchTrm+", you want to change!")}
   }

//console.log(isItThere("everybody needs somebody to love","needs","wants"));

//password, your name, $
//bigger than 8 , doesnt include your name

function pwChecker(name, password) {
   if (password.includes(name) || password.length<8 || !(password.includes("$"))){
      return ("invalid")
   }
   else{return ("valid")}
      }
//  ret=pwChecker("Dave Bowman","Rüben$Brei");
 // console.log(ret);
 function cityFacts(cityObj) {

return `${cityObj.name} has a population of ${cityObj.population} 
and is situated in ${cityObj.continent}` 
}
//  ret=pwChecker("Dave Bowman","Rüben$Brei");
 // console.log(ret);

 //let city1={name:"Hamburg", population:"1.800.000", continent:"Europe"};

 //console.log(cityFacts(city1))
//document.write(cityFacts(city1.advice));

// city1.advice = "positve"; 
 //document.write(cityFacts(city1));

 // function added to the object that checks if population is bigger than 1.000.000
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
   
