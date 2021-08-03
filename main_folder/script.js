'use strict';

let argument = "123456789112939321932832189821838213871238231893128913813298918891382138128218";

const argumentControl = function(argument) {
    if (typeof argument !== "string"){
        return "Argument is not a string";
    } else {
        argument = argument.trim();
        if (argument.length> 30) {
            argument = argument.substr(0, 31) + "...";
        }
        return argument;
    }
};
console.log(argumentControl(argument));