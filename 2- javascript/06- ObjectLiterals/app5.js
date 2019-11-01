function airLine(airLineObjects) {

    for(i=0;i<airLineObjects;i++){
        airLineObjects[i].higher100=function(){
            return this.avgPriceTicket>100;
        }
    }

    return ;
  
}


//call
let airlinePrices = [
    {airlinesName: 'Lufthansa', avgPriceTicket: 85.6},
    {airlinesName: 'Aegean', avgPriceTicket: 65.8},
    {airlinesName: 'KLM', avgPriceTicket: 102.82},
    {airlinesName: 'British Airways', avgPriceTicket: 114.9},
    {airlinesName: 'Iberia', avgPriceTicket: 77.2},
    {airlinesName: 'TAP Portugal', avgPriceTicket: 58.9},
    {airlinesName: 'Alitalia', avgPriceTicket: 84.2},
    {airlinesName: 'Air France', avgPriceTicket: 105.6},
    {airlinesName: 'Singapore Airlines', avgPriceTicket: 119.2},
    {airlinesName: 'Emirates', avgPriceTicket: 135.4},
  ]
  console.log(airLine(airlinePrices));

  

