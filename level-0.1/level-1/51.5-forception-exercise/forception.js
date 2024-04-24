var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
people = people.map(i => i + ":");
console.log(people)

var alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception (people, alphabet) {
    var result = [];
    for (var i = 0; i <people.length; i++) {
        result.push(people[i])
        for (var j = 0; j <alphabet.length; j++) {
            result.push(alphabet[j].toUpperCase())
        }
    }
    return result
}

console.log(forception(people, alphabet))

/*[ 'Jon:', 'Jacob:', 'Jingle:', 'Heimer:', 'Schmidt:' ]
[
    'Jon:', 'A', 'B', 'C', 'D',       'E',       'F',
    'G',    'H', 'I', 'J', 'K',       'L',       'M',
    'N',    'O', 'P', 'Q', 'R',       'S',       'T',
    'U',    'V', 'W', 'X', 'Y',       'Z',       'Jacob:',
    'A',    'B', 'C', 'D', 'E',       'F',       'G',
    'H',    'I', 'J', 'K', 'L',       'M',       'N',
    'O',    'P', 'Q', 'R', 'S',       'T',       'U',
    'V',    'W', 'X', 'Y', 'Z',       'Jingle:', 'A',
    'B',    'C', 'D', 'E', 'F',       'G',       'H',
    'I',    'J', 'K', 'L', 'M',       'N',       'O',
    'P',    'Q', 'R', 'S', 'T',       'U',       'V',
    'W',    'X', 'Y', 'Z', 'Heimer:', 'A',       'B',
    'C',    'D', 'E', 'F', 'G',       'H',       'I',
    'J',    'K', 'L', 'M', 'N',       'O',       'P',
    'Q',    'R',
    ... 35 more items
  ]

//this is what I was working on but this is literally doing the most 
// var allCaps = alphabet.toUpperCase( )
// console.log(allCaps)

// var alphaArr = allCaps.split("")
// console.log(alphaArr)

//now my two arrays are var people and var alphaArr*/