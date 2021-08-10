'use strict';

let textBoxA = document.querySelector(".current-date"),
    textBoxB = document.getElementById("textBoxB"),
    weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
    
    function setDateCommon (){
        setInterval(function () {
                let currentDate = new Date(),
                    currDay = weekDays[currentDate.getDay()],
                    currMonth = month[currentDate.getMonth()],
                    dateA = "Today is " + currDay + ", " + currentDate.getDate() + " " + currMonth + " " + currentDate.getFullYear()+ ", "+ currentDate.getHours() + " hours " + currentDate.getHours() + " minutes " + currentDate.getSeconds() + " seconds",
                    dateB,
                    date = currentDate.getDate(),
                    curmonth = currentDate.getMonth(),
                    year = currentDate.getFullYear(),
                    hours = currentDate.getHours(),
                    minutes = currentDate.getMinutes(),
                    seconds = currentDate.getSeconds(),
                    dateArr = [date, curmonth, year,hours, minutes, seconds];
                    (function (){      
                        if (currentDate.getSeconds() === 1) {
                            dateA = "Today is " + currDay + ", " + currentDate.getDate() + " " + currMonth + " " + currentDate.getFullYear()+ ", "+ currentDate.getHours() + " hours " + currentDate.getHours() + " minutes " + currentDate.getSeconds() + " second";
                        } else if (currentDate.getMinutes() === 1) {
                            dateA = "Today is " + currDay + ", " + currentDate.getDate() + " " + currMonth + " " + currentDate.getFullYear()+ ", "+ currentDate.getHours() + " hours " + currentDate.getHours() + " minute " + currentDate.getSeconds() + " seconds";
                        } else if (currentDate.getHours() === 1) {
                            dateA = "Today is " + currDay + ", " + currentDate.getDate() + " " + currMonth + " " + currentDate.getFullYear()+ ", "+ currentDate.getHours() + " hour " + currentDate.getHours() + " minute " + currentDate.getSeconds() + " seconds";
                        }
                        textBoxA.innerHTML = dateA ;
                    }());

                    (function (){
                        dateArr.forEach(function(item, i){
                            if (item < 10) {
                                dateArr[i]= "0"+item;
                                console.log(dateArr);
                            } else {
                                return item;
                            }
                        });
                        dateB = ` ${dateArr[0]}.${dateArr[1]}.${dateArr[2]} - ${dateArr[3]}:${dateArr[4]}:${dateArr[5]}`;    
                        textBoxB.innerHTML = dateB ;
                    }());
                    }, 1000);
    }

setDateCommon();

