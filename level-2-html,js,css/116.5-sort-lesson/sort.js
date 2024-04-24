const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

// .sort()
    //needs two parameters (a,b) these are the necessary then return how to sort 
    //no need to save it in a variable since we can just console log the arr itself 

//sort numbers from least to greatest (increment) will work on strings but lower and uppercase are a bit tricky
arr.sort(function(a,b){
    return a-b //ascending
})
console.log(arr)

//es6 syntax 
//arr.sort((a,b) => a-b)

//sort numbers from greatest to least
arr.sort ((a,b) => b - a) //descending

console.log(arr)
