// create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(43,56,33,23,44,36,5);
const fruits = ['Apple','Banana','Orange','Pear'];
const mixed =[22, 'Hello', true, undefined, null, {a:1, b: 3}, new Date()];

let val;

// get array length
val = numbers.length;
// check if is array
val = Array.isArray(mixed);

// access the array elements
val = numbers[2];
val = mixed[4];

// insert into array
// numbers[2]=100;

// find index of value
val = numbers.indexOf(33);

// mutating arrays
// add at the end
numbers.push(250);

//remove itme from end 
numbers.pop();

//remove from the beginning
numbers.shift();

//cuts array into 2
val = numbers.splice(2,3);//xxoooxxxx

//slice copies a part of an array 
val = numbers.slice(1,2);

// sorting arrays
val = fruits.sort();

// advanced sorting  with compare function
val = numbers.sort(
    function (x,y){
    return x-y
})

arr1=[4,17,2,57,12];
arr2=[56,3,87,34,2];
//val = arr1.concat(arr2);
//val = val.sort(function(x,y){return x-y});
val = ([].concat(arr1,arr2)).sort(function(x,y){return x-y});

//join
let str = 'Safwan am i there Hello';
console.log(str);
let arr = str.split(' ');
arr.reverse();
str = arr.join(' ');
console.log(arr);
arr.reverse();
str = arr.join(',');

console.log(arr);
console.log(str);

//find arraymethod that takes a function as a parameter
function over50(num){return num>50;}

val = numbers.find(over50);

console.log(val);
console.log(typeof val);