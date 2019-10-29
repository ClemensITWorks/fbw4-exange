function greetingAtTime(name) {
   if (name.length>8){return true }
    return false;
}

//let outStr=(`World + ${2+4}`);

//console.log(outStr);
//let num= outStr.length;
//console.log(num);
let name="andreaislongenough";
let greeting="password too short";
if (greetingAtTime(name)){
  //  console.log(name)
   greeting= "nice to see you";
}
console.log(greeting);
