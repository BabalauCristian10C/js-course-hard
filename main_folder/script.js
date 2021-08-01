let num = 266219,
    numStr = num.toString(),
    product = 1,
    numArr = numStr.split('');

for (let i=0; i< numStr.length; i++){
    num = +numArr[i];
    product *= num;
}

console.log(product);

let cuboid = product ** 3;
console.log(cuboid.toString().substr(0, 2));