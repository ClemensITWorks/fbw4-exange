const person = {
    
    firstName: 'Stefan',
    lastName: 'Smith',
    age : 28,
    email: 'zerocode@aol.com',
    hobbies: ['sleeping', 'eating', 'shopping'],
    address:{
    city: 'Winterhude',
    state: 'Hamburg'
    },
    getBirthYear: function (){
        yearStr=((Date().split(' '))[3]); // i take the datestring here and split it by space and i took the forth arraystring as the result (index 3 of course)
        console.log(yearStr);               // this is only to check, if the result is right
        year=parseInt(yearStr);             // because i know, that year is allways integer i choosed parseint to change the string to a number
        return year - this.age              // so you got the actual starting year right.
    }
}

let val;
val = person;
val = person.firstName;
val = person['lastName'];
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);
console.log(((Date().split(' '))[3]));
