function sum(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

//can do export multiple by saving in an object
// module.exports = {
//     sum: sum,
//     subtract: subtract
// }

//can export in a shortened way with js 
module.exports ={sum, subtract}

//can also do it this way 

// module.exports.sum = function (a,b) {
//     return a+b
// }
// module.exports.subtract = function (a,b) {
//     return a-b
// }
