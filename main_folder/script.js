'use strict';

let argument = "123456789112939321932832189821838213871238231893128913813298918891382138128218",
    argumentLenght = lenghtArgument(argument);


function lenghtArgument (argument) {
    let index = 0;
    for (let i = 0; i< 100; i++){
        if (typeof argument[i] !== "undefined"){
            index++;
        }
        else {
            break;
        }
    }
    return index;
}


const argumentControl = function(argument, argumentLenght) {
    if (typeof argument !== "string"){
        return "Argument is not a string";
    } else {
        argument = argument.trim();
        if (argumentLenght > 30) {
            argument = argument.substr(0, 31) + "...";
        }
        return argument;
    }
};
console.log(argumentControl(argument, argumentLenght));