//revealing module pattern 
// const factor = 2
let factor = 2

// function multiplyBy2(num){
//  return num * factor
// }

// module.exports = multiplyBy2
//will we have access to the const factor?  yes? the console.log in app revealed 20

function multiply(num) {
    return num * factor
}

function setFactor(newFactor){
    factor = newFactor
}

//export an object that has multiply and set factor 
module.exports = {multiply, setFactor}
