/*
if smartphone 
yes                         no
300                         0

if headphones
yes
50  

smartphone && cover
yes
20

smartphone && headphones
10% discount

smartphone && headphones && cover
15% discount

smartphone && orange cvr 15% else if sp && pink cvr 12% else if 7% else sp && cvr5%


*/ 

let cash=0;

smartphone = true;
headphones = true;
cover = true;
orange = true;
green = false;
pink = false;

/*cash=(cash + smartphone ? 300:0);
cash =(cash + headphones ? 50:0);
cash + (cover) ? 20:0;*/

if (smartphone){cash+=300;}
if (headphones){cash+=50;}
if (cover){cash+=20;}
if(smartphone && headphones && !cover){cash=cash*0.90;
console.log('s+h')}
if (smartphone && headphones && cover){cash=cash*0.85;}
if (smartphone && cover && orange && !headphones){cash=cash*0.85}else
if (smartphone && cover && pink && !headphones){cash=cash*0.88}else
if (smartphone && cover && green && !headphones){cash=cash*0.93}else
if (smartphone && cover && green && !headphones){cash=cash*0.95}




 console.log(cash);


