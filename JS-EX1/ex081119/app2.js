// pangram problem

function detPan(inStr){
    inStr.toLowerCase();
    let abcStr='abcdefghijklmnopqrstuvwxyz'
    for (i=0; i<27;i++){
                if (inStr.indexOf(abcStr.charAt(i))==-1){      
                    return 'nope, no Pangram'
                } 
    }
    return 'its more than obvious that you have got a nice pangram here'
}

console.log(detPan('The quick  fox jumps over the lazy dog'))