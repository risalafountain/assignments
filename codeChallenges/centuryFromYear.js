// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.

//talk it out // understand the problem // ask questions
    //for every 100 years, add 1 to a count 

function solution(year) {
    //step 1  create accumulator variable
    let count = 0
        
    //step 2  for every 100 add one to our accumulator
    while (year > 0){
        year = year - 100
        count ++
    }
    //this reads that while year is greater than 0
    //subtract 100 from the year and add 1 
        //if year is 1905, subtract 100 and add 1 to our count 
        //then its 1805, subtract 100 and add 1 to count 
    
    //step 3  return accumulator
    return count   
}


    
