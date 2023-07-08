//talk it out : The first letter of each word needs to be capitalized
   //string method to manipulate the data
   //find index 0 of each word
   //split the string into an array 
// asking questions
//psuedo code plan 
//problem solving
  
function solution(inputString){

    //step 1: split string into array
    const splitStr = inputString.split(" ")
    //step 2: iterate the array   //map, for loops
    const mappedArr = splitStr.map(word => {
      //step 3: string method to manipulate the data
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return mappedArr.join(" ")
    //step 4: put it all back together
  
  
  }
   console.log(solution("the princess is in another castle!!!"))
  
   // The Princess Is In Another Castle
  
   //this is what it looks like when typed up into a single line!
   return inputString.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")