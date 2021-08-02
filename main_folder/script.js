let lang = prompt("Select ru / en", "ru");
const ruD = ["понедельник", "вторник","среда","четверг","пятница","суббота", "восскресенье"];
const enD = ["monday", "tuesday", "wednesday", "thrusday", "friday", "saturday" , "sunday"];
const comD = [[ruD], [enD]];
let ans;

// Method if
if (lang === 'ru'){
    console.log(ruD);
} else if (lang === 'en') {
    console.log(enD);
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

lang === "ru" ? console.log(comD[0]) : console.log(comD[1]);

// 2nd Excersise

const namePerson = prompt("имя", 'Артем');
namePerson === 'Артем' ? ans = "директор" : namePerson === "Максим" ? ans = "преподаватель" : ans = "студент";
console.log(ans);