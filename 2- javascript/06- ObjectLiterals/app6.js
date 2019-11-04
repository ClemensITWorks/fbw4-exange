function bestRoute(inStr) {
    inArr = inStr.split(' '); //creating an Array from the inStr

    route = [{              // creating the standard routes objects
        Time: 30,
        Stops: 2,
        KM: 16
    }, 
    
    {
        Time: 28,
        Stops: 3,
        KM: 15
    }, 
    
    {
        Time: 26,
        Stops: 5,
        KM: 17
    }]; // creating the routes here end

    for (i = 0; i < inArr.length; i = i + 2) { //adding new time to routes with new time
        route[inArr[i]].Time = inArr[i + 1];
    }

    for (i = 0; i < route.length; i++) {
        // creating a testnumber here that multiplies Time by 100000, Stops by 1000 and adds all three
        route[i].best = route[i].Time * 100000 + route[i].Stops * 1000 + route[i].KM;
    }
    testVal = route[0].best;
    res = 0;
    // search for the lowest controlnumber
    for (i = 1; i < route.length; i++) {
        if (testVal > route[i].best) {
            testVal = route[i].best;
            res = i;
        }

    }
    // the end
return `take route ${res}, ${route[res]}`;
}
console.log(bestRoute('1 30 2 25'));// put in routenumber and actual time
