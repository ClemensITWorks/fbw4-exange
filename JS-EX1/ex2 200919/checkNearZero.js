function chckNrZr(wrkArr) {
    let wrkObjP=wrkArr[0];
   for (i = 0; i < wrkArr.length; i++) {
        if (wrkArr[i].dist == 0) { return wrkArr[i]; }

        let chkDistW = wrkArr[i].dist;
        let chkDistPO = wrkObjP.dist;
        if (chkDistW < 0){chkDistW=chkDistW*(-1);}
        if (chkDistPO < 0){chkDistPO=chkDistPO*(-1);}
        if (chkDistW < chkDistPO)
        {
            wrkObjP=wrkArr[i];
          }
     //   console.log(wrkObjP);
    }
   // console.log(wrkObjP);
    retObj = wrkObjP;
    return retObj;
}

let fr1 = { name: "Willi", dist: 5 };
let fr2 = { name: "Hein", dist: 3 };
let fr3 = { name: "Gabi", dist: -2 };
let fr4 = { name: "Else", dist: 2 };
let fr5 = { name: "Rex", dist: 11 };

let inpArr = [fr1, fr2, fr3, fr4, fr5];
let outObj = chckNrZr(inpArr);
console.log(outObj);
