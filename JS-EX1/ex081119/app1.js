function chkConsecutive(chkArr){
    chkVal1=chkArr[0]-chkArr[1];
    chkVal2=chkArr[1]-chkArr[2];
    for (i=0;i<chkArr.length;i++){
        chkVal1=chkArr[i+1]-chkArr[i+0];
    chkVal2=chkArr[i+2]-chkArr[i+1];
        if(chkVal1>chkVal2 && chkVal2>0){return chkArr[i+1]-chkVal2}
        if(chkVal1>chkVal2 && chkVal2<0){return chkArr[i+2]-chkVal1}
    }
    }
    console.log(chkConsecutive([-9, -13, -21]));