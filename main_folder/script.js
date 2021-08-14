'use strict';

const body = document.body,
    button = document.querySelector("button");

let bodyProperties = {
    bgc: "#fff",
    bgGenerate: function(){
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        bodyProperties.bgc = '#' + n.slice(0, 6);
        function setColor (){
            body.style.backgroundColor = bodyProperties.bgc;
            document.querySelector("#hex-code").innerHTML = bodyProperties.bgc;
        }
        setColor();
    }
};




button.addEventListener("click", bodyProperties.bgGenerate);