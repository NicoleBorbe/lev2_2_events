let keyCodeOutput = document.getElementById("keyCodeOutput");
let keyCode = document.getElementById("keyCode");
let key = document.getElementById("key");
let code = document.getElementById("code");


document.body.addEventListener("keydown", function (e) {
    let unicode= event.which;
    keyCode.innerHTML = unicode;
    keyCodeOutput.innerHTML = unicode;
    key.innerHTML = `${e.key}`;
    code.innerHTML = "Key" + `${e.key.toUpperCase()}`;
});