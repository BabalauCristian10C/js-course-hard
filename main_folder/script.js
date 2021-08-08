'use strict';

const styleBold = 'font-weight:bold; ';
const styleCursive = 'font-style: italic;';
const styleCommon = styleBold + styleCursive;

let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    date = new Date(),
    todayDate = date.getDay();
todayDate = 5
weekDays.forEach(function(item, i, array){
    if (i === 0 || i === 6) {
        if (todayDate === i){
            console.log(`%c ${item}`, styleCommon);
        } else {
            console.log(`%c ${item}`, styleCursive);
        }

    }else if (todayDate === i){
        console.log(`%c ${item}`, styleBold);
    }
    else{
        console.log(item);
    }
});
