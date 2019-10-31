function coffeebreak(){}

const firstName = "Safwan";
const lastName = 'Kher Allah';
const age = 32;
const str = 'Hello there, my name is Safwan';
const tags ='web design, web development, programming';

let val;

// concatination
val = firstName+' '+lastName;
val = 'Safwan';
val += ' ';
val += 'Kher Allah';
val = 'Hello, My name is '+firstName+' and i am  '+age+' years old';

//escaping
val = 'that\'s awesome, i can\'t wait';

//concat
val = firstName.concat(' ', lastName);

//change case
val = firstName.toLowerCase();
val = lastName.toUpperCase();

// replace
val = str.replace('Safwan','Saf1');