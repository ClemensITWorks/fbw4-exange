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
return `${cityObj.name} has a population of ${cityObj.population} and is situated in ${cityObj.continent}` 
}
//  ret=pwChecker("Dave Bowman","Rüben$Brei");
 // console.log(ret);

 let city1={name:"Hamburg", population:"1.800.000", continent:"Europe"};
 console.log(cityFacts(city1))