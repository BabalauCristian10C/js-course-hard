let lang = prompt("Select ru / en", "ru");
const ruCallendar = ["понедельник", "вторник","среда","четверг","пятница","суббота", "восскресенье"];
const enCallendar = ["monday", "tuesday", "wednesday", "thrusday", "friday", "saturday" , "sunday"];
const comCallendar = {"ru": [ruCallendar],
                      "en": [enCallendar]};

let ans;

// Method if
if (lang === 'ru'){
    console.log(ruCallendar);
} else if (lang === 'en') {
    console.log(enCallendar);
}
// Method Switch-case

switch (lang) {
    case "ru":
        console.log(ruD);
        break;
    case "en": 
        console.log(enD);
        break;
}

// Method Multidimensional Array
if (!!(lang)){
    console.log(comCallendar[lang]);
}


// 2nd Excersise

const namePerson = prompt("имя", 'Артем');
namePerson === 'Артем' ? ans = "директор" : namePerson === "Максим" ? ans = "преподаватель" : ans = "студент";
console.log(ans);