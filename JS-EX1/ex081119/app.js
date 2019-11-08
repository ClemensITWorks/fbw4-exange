function sortStr(inArr){
retArr=inArr[0];
retArr=inArr.sort(function(a,b){inArr.length[a]- inArr.length[b]})
/*    booChk=true;
    for (i=1;inArr.length[i-1]<inArr.length[i];i++){
    }
    if (i=retArr.length){retArr.push(inArr[i])}*/

    return retArr
}

console.log(sortStr(["Telescopes", "Glasses", "Eyes", "Monocles"]))