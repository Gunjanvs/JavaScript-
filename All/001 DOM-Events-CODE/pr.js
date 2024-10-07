const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log('you fucked me');
    console.log('dont toch me ');
}
function scream() {
    console.log("mouse enterd");
}
btn.onmouseenter = scream;