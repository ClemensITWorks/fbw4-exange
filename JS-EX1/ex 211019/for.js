let food=["blue","green", "yellow", "red", "black"];

document.write("<hr>");
let div;
for (i =0; i<food.length; i++){
    div="<div style='text-align:center;margin:0 auto;height:40px;color:white;width:"
    +i+5+"%;background:"+food[i]+"'>" + food[i]+ "</div>";
    
    document.write(div);
}