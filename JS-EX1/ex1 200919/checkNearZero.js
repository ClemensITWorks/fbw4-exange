function chckNrZr(wrkArr) {
    let wrkPos = 0; let wrkNeg = 0; let retVal;

    for (i = 0; i < wrkArr.length; i++) {
       if (wrkArr[i] ==0) { return wrkArr[i]; }

        if (wrkArr[i] > 0) {
            wrkPos = wrkPos + wrkArr[i]
        }

        if (wrkArr[i] < 0) {
            wrkNeg = wrkNeg + wrkArr[i]
        }
    }

    for (i = 0; i < wrkArr.length; i++) {
        if (wrkArr[i] > 0 && wrkArr[i] < wrkPos) {
            wrkPos = wrkArr[i]
        }

        if (wrkArr[i] < 0 && wrkArr[i] > wrkNeg) {
            wrkNeg = wrkArr[i]
        }
    }
    retVal = wrkPos;
    if (retVal > (wrkNeg * -1)) { retVal = wrkNeg; }
    return retVal;
}

let inpArr = [7, 4, -3, 9];
let outVal = chckNrZr(inpArr);
console.log(outVal);
