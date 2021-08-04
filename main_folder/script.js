const arr = ["23412", "45124", '98321231', "2931", "65", "981823", "444"];

for (let number in arr){
    if (arr[number][0] === "2" || arr[number][0] === "4") {
        console.log(arr[number]);
    }
}

// 2.

for (let i = 2; i < 101; i++) {
    let x = 1;
    for (let b = 1; b < i; b++){
        if (i%b === 0) {
            x++;
        } else {
            continue;
        }
    }
    if (x === 2){
        console.log(i);
    }
}