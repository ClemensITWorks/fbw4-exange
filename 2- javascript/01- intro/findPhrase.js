function findPhrase(text, phrase) {

    let numberOfRepeat = 0;
    let loopIndex = 0;
    let srchIndex = 0;
    let phrslngth = phrase.length;
    let bool = true;

    while (bool) { //indexOf gives back -1 when it does not find the search
        loopIndex = text.indexOf(phrase, srchIndex); //searches the text for the phrase starting at srchIndex and gives back the first index that it finds from this position

        if (loopIndex == -1) {
            return numberOfRepeat;
        } // if the result is -1 the boolean is set to false
        srchIndex = loopIndex + phrslngth; // sets srchIndex  behind the last found position

        numberOfRepeat++;

    }

    return numberOfRepeat - 1;
}

// faster for loop
function findPhrase2(text, phrase) {

    let numberOfRepeat = 0;
    let loopIndex = 0;
    let phrslngth = phrase.length;

    for (i = 0; i < text.length; i++) {

        loopIndex = text.indexOf(phrase, i); //searches the text for the phrase starting at srchIndex and gives back the first index that it finds from this position
        i = loopIndex + phrslngth-1;
        if (loopIndex == -1) {
           return numberOfRepeat;
        }

    numberOfRepeat++; 

    }

  // not necessary any more  return numberOfRepeat;
}

let text1 = 'the rabbit was jumping over the rabbit all the time rabbit';
let phrase1 = 'rabbit';

const num1 = findPhrase2(text1, phrase1);
console.log(num1);
