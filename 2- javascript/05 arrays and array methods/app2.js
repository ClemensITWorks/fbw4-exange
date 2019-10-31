
function pass(chkArr){

let counter=0;
let arrLength=chkArr.length;
for (i=0; i < arrLength-1; i++){
if(chkArr[i]<50){ counter++;}
}
let result=counter*100/arrLength; // ten results at all. counter is the amount ot resultslower 50 x/100 = counter/10
return result;
}

let chkArr=[78, 82, 45, 69, 23, 91, 55, 39, 66, 60];
console.log(pass(chkArr))