// pangram problem

function weirdStr(inStr) {
    booChk = true;
    outStr = '';
    for (i = 0; i < inStr.length; i++) {
        switch (true) {

            case (inStr.substr(i, 1) == ' '):
                outStr = outStr + ' ';
                booChk = true;
                break;


            case booChk:

                outStr = outStr + inStr.substr(i, 1).toUpperCase();
                booChk = false;
                break;

            case !booChk:
                outStr = outStr + inStr.substr(i, 1).toLowerCase(i);
                booChk = true;

        }

    }
    return outStr;
}



console.log(weirdStr("Weird string case"))