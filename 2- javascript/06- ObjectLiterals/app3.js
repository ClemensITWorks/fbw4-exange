/*
boxes with 5 kg and 2 kg 
min 7 kg

analising
8 kg = 2 2 2 2 
9 kg = 5 2 2
11 kg = 5 2 2 2
12 kg = 5 5 2
13 kg = 5 8
14 kg = 5 9
16 kg = 5 11
17 = 5 5 5 2
18 = 5 5 8
19 = 5 5 9

Algorithm

devide weight by 5
parseInt
= fivePack

devide weight by 5
get remainder

switch true 

case remainder 1
fivePack -5
3 twoPack

case remainder 2 or 4
    twoPack = devide remainder by 2

case remainder 3
    fivePackpack - 5    
    4 twoPack
    
*/

function packages(kg) {
    fivePack = parseInt(kg / 5);
    console.log(kg);
    switch (true) {

        case ((kg % 5) == 1):
            fivePack = fivePack - 1;
            twoPack = 3;
            break;

        case ((kg % 5) == 2 || (kg % 5) == 4):
            twoPack = kg % 5 / 2;
            break;

        case ((kg % 5) == 3):
            fivePack = fivePack - 1;
            twoPack = 4;
            break;
        default:
            twoPack = 0;
    }

    return `we need ${fivePack} 5-KG-Boxes and ${twoPack} 2-KG-Boxes`;
}

for (i = 7; i < 25; i++) {
    console.log(packages(i));
}