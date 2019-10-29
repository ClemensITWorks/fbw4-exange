/*let val;
let par;

//Number 2 String
val = 555;

//date 2 string

val = new Date();
par = String(val);

//Array 2 String
val =[1,2,3,4,5];
par = String(val);


//Output

console.log(val);
console.log(typeof val);


console.log(par);
console.log(typeof par);*/



function findPhrase(text, phrase) {

    let numberOfRepeat = 0;
    let loopIndex = 0;
    let srchIndex = 0;
    // let srchStr=text;
    let phrslngth = phrase.length;
    let bool=true;

   // while (!loopIndex == -1) { //indexOf gives back -1 when it does not find the search
   while (bool){ //indexOf gives back -1 when it does not find the search

    //while (!text.indexOf(phrase, srchIndex)==-1){
     
loopIndex = text.indexOf(phrase, srchIndex); //searches the text for the phrase starting at srchIndex and gives back the first index that it finds from this position
       if (loopIndex==-1){bool=false;}     // if the result is -1 the boolean is set to false
        srchIndex = loopIndex + phrslngth; // sets srchIndex  behind the last found position
     
        //  console.log('inside loop', loopIndex, bool);
     
        numberOfRepeat++;

    }

    return numberOfRepeat-1;
}

function findPhrase2(text, phrase) {

    let numberOfRepeat = 0;
    let loopIndex = 0;
    let phrslngth = phrase.length;
     
   for (i=0; i<text.length;i++){
     
     loopIndex = text.indexOf(phrase, i); //searches the text for the phrase starting at srchIndex and gives back the first index that it finds from this position
     i=loopIndex+phrslngth;
     if (loopIndex==-1){i=text.length+100;}
     
        numberOfRepeat++;

    }

    return numberOfRepeat;
}

let text1 = 'the rabbit was jumping over the rabbit all the time rabbit';
let phrase1 = 'rabbit';

const num1 = findPhrase2(text1, phrase1);
console.log(num1);