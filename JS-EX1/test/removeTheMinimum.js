function removeSmallest(numbers) {
    let arrInd = 0;
   // chknmbr = numbers[arrInd];
    for (i = 1; i < numbers.length; i++) {

        if (numbers[i] < numbers[arrInd]) {
         //   chknmbr = numbers[i];
            arrInd = i;
        }
    }

    retArr1 = numbers.slice(0, arrInd);
    retArr2 = numbers.slice(arrInd+1);
    let retArr =retArr1.concat(retArr2);
  return retArr;
  //  console.log(numbers, retArr1, retArr2, retArr, arrInd);
}
let origArr = [5, 3, 1, 7, 9, 2];
//console.log(origArr);
//removeSmallest([1, 3, 1, 7, 9, 2]);
console.log(removeSmallest(origArr), origArr);