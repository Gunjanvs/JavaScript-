// let random = Math.random();
// if (random < 0.5) {
//     console.log('lessthan 0.5');
// }
// else {
//     console.log('more than that');
// }
// console.log(random);
// const dayofweek = prompt('enter a day').toLowerCase();
// if (dayofweek === 'monday') {
//     console.log('hate monday ');
// } else if (dayofweek === 'tuesday') {
//     console.log('no chicken');
// }
// else {
//     console.log('other day');
// }
const password = prompt('ENTER PASSWORD');
if (password.length > 8) {
    if (password.indexOf(' ') == -1) {
        console.log('VALID PASSWORD');
    }
    else {
        console.log('PASSWORD CONTAINS SPACE ');
    }
}
else {
    console.log('PASSWORD ATLEATS 8 NUMBERS');
}
