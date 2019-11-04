function timeCompare(today, eventDate){
    month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
if (eventDate>today){
return`Your book to the event for the  ${eventDate.getDate()}th of ${month[eventDate.getMonth()-1]} ${eventDate.getFullYear()} is allready guaranteed`
}else{return 'sorry, the event is allready over'}

}

todayOuter = new Date();
eventOuter = new Date();
eventOuter.setMonth(11);
eventOuter.setDate(27); 

console.log(timeCompare(todayOuter, eventOuter))