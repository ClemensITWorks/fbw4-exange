
function chkKnowledge(candidate, chkLngLst){
chkArr=chkLngLst.split(' ');
canArr=candidate.split(' ');
let counter=0;
console.log(canArr, chkArr, canArr.length);

for(i=1; i<canArr.length; i++){         //normaly i would set here i<canArr.Length-1 but it doesnt work correctly than???

if(chkArr.includes(canArr[i])){counter++;
console.log(counter, canArr[i]);}
}
if (counter>2){return`call us ${canArr[0]} you passed`
}else{
    return `Sorry ${canArr[0]}, learn more`}
}
console.log(chkKnowledge('Dave Python Java Fortran','PHP JavaScript Ruby Python Java'))
console.log(chkKnowledge('Isaac Python Java Fortran Ruby','PHP JavaScript Ruby Python Java'))
