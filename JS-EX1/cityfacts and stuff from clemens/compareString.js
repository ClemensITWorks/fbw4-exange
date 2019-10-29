//let a= [a,b,c]
//how can i get c?
//check if string is plural or singular (plural ends on s)

//inviting people birthdayparty
//if the name is the same length
function chckPlrl(chkStr){
    
    if (chkStr[chkStr.length-1]=="s"){
    return `it's plural`
    }
    return `it's singular, baby`
}

function sameLength(name1,name2){

    if (!(name1.length-name2.length)){
    return `you are invited`
    }
    return `better luck next time`
}

function sameLength1(name1,name2){

    if (name1.length===name2.length){
    return `you are invited`
    }
    return `better luck next time`
}
for (i=0; i<1000000; i++){
document.write(sameLength("Safwan","Stefan"));
}
//
