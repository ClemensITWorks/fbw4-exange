function cityIveVisited(srchArr, contArr) {
   let retArr = [];
    document.write(`step1`,retArr);
    for (i = 0; i < contArr.length; i++) {
        for (sA = 0; sA < srchArr.length; sA++) {
            if (contArr[i] == srchArr[sA]) {
                retArr.push(`i have visited ${srchArr[sA]}`);
                document.write(`step1`,retArr);

                if (sA !== 0 && sA !== searchCityArr.length) {
                    retArr.push(` and `);
                    
                }
            }
        }
    }
}
return retArr
   // return `i have not visited any city`
}

let cityArr = ["Istanbul", "Hamburg", "Paris"];
let searchCityArr = ["Hamburg", "Paris"];
//document.write(cityArr,searchCity);
document.write(cityIveVisited(searchCity, cityArr));