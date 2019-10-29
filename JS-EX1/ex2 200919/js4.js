function greet() {
   let name;
   do {
      name = prompt("please enter your name:");
      txt = `Hello ${name}`;
      if (name == "" || name == null) { txt = "sorry, please try again"; }
      //document.write(txt);
   } while (name === "" || name === null)
   document.write(txt);
}

//greet();

function calculate() {
   let nmb;
   do {
      nmb = prompt("please enter the Number you want to be calculated:");
      txt = `${nmb} multiplied with itself is ${sqr(nmb)}`;
      if (nmb == "" || nmb == null) { txt = "sorry, please try again"; }
      //document.write(txt);
   } while (nmb === "" || nmb === null)
   document.write(txt);
}

function sqr(sqrv){return sqrv*sqrv;}

//calculate();

function pwChecker(name, password) {
   if (password.includes(name) || password.length<8 || !(password.includes("$"))){
      return ("invalid")
   }
   else{return ("valid")}
      }

//funtion pwCheckInp(){
      let txt;
      let name = prompt("Enter your name, please");
      let pw = prompt("I need your password, too");
      if (name == "" || name == null|| pw == "" || pw == null) { txt = "sorry, please try again"; }
else{
   txt=`hello ${name}, your password is ${pwChecker(name,pw)}`}
  // return txt;}

   //let outTxt = pwCheckInp();
document.write(txt);
