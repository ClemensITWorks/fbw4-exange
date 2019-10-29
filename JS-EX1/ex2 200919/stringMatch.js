function greetingAtTime(name) {
  // if (name.length<8){return false}

   //for (i=0;i<name.length;i++){
      return(name.includes("$")&&(name.length>7))
  //}
   //return false;
}

//let outStr=(`World + ${2+4}`);

//console.log(outStr);
//let num= outStr.length;
//console.log(num);
let name="andreais long$ enough";
let greeting="password too short or $ missing";
if (greetingAtTime(name)){
  //  console.log(name)
   greeting= "nice to see you";
}
console.log(greeting);
//check pw if $