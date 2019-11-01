function scores(arr1, arr2, newEntry) {

    tgthrArr = [].concat(arr1, arr2); //tgthrArr = together array
    average = 0;
    for (i = 0; i < tgthrArr.length; i++) {
        average = average + tgthrArr[i];
    }
    console.log('1', tgthrArr, average);

    tgthrArr.push(newEntry);
    average = 0;
    best = 0;
    for (i = 0; i < tgthrArr.length; i++) {
        /* handle both in one for loop. in this case the new value is also calculated 
        and compared. if this is not wanted, the forloop has to stop one index further */
        average = average + tgthrArr[i];
        if (tgthrArr[i] > best) {
            best = tgthrArr[i];
        }

    }
    average = average / tgthrArr.length;

    return `the average result is ${average}, the best result is ${best}`;
  
}


//call
handleArr = scores([67, 82, 91, 96, 54], [46, 48, 24, 33, 30], 57);
console.log('outside', handleArr);
