// let, const, var
/*
let, const were introduced in 
 */

// global scope , local scope

//Examples
//declare a variable with var
/*var name= 'john doe';
console.log(name);

let email='address@domain.suffix';
console.log(email);

name='Safwan';
email='safwan@webmail.de';
console.log(name, email);

// var g&l scope
function show(){
    var num = 5;
    console.log(num);
}

var num=9;
show();
console.log(num);

//let & const g & l scope 
function print(){
    let number = 107;
    console.log(number);
}

let number =109;
print();*/

/*function greeting(greetword, name){
    greetPhrase = greetword + " " +name;
    return greetPhrase;

}

const greetingMe= greeting('Hi','Me');

console.log(greetingMe);
*/
function findPhrase(text, phrase){
   let numberOfRepeat=0;
   let srchIndex=0;
   let srchStr=text;
 while(!srchIndex==-1){

       newSrchIndex=srchStr.indexOf(phrase, srchIndex)+phrase.length;
      srchIndex=newSrchIndex;
        console.log(text.indexOf(srchIndex));
     numberOfRepeat++;
    }
    return numberOfRepeat
}

let text1 = 'the rabbit was jumping over the rabbit all the time';
let phrase1 = 'rabbit';

const num1 = findPhrase(text1, phrase1);
console.log(num1);