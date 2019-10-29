function morsecode(didDaDaString) {
morseCodeArr=[
  ".-", "A",
"-...", "B",
"-.-.", "C",
"-..", "D",
".", "E",
"..-.", "F",
"--.", "G",
"....", "H",
"..", "I",
".---", "J",
"-.-", "K",
".-..", "L",
"--", "M",
"-.", "N",
"---", "O",
".--.", "P",
"--.-", "Q",
".-.", "R",
"...", "S",
"-", "T",
"..-", "U",
"...-", "V",
".--", "W",
"-..-", "X",
"-.--", "Y",
"--..", "Z",
"-----", "0",
".----", "1",
"..---", "2",
"...--", "3",
"....-", "4",
".....", "5",
"-....", "6",
"--...", "7",
"---..", "8",
"----.", "9",
"  "," "
];
console.log(didDaDaString, morseCodeArr)
  for (i=0; i<morseCodeArr.length; i=i+2)
  {chkStr=morseCodeArr[i];
    rplcStr=morseCodeArr[i+1];
    didDaDaString.replace(new RegExp(chkStr,"g"),rplcStr);
}
  }

  console.log(morsecode(".... . -.--   .--- ..- -.. ."));

