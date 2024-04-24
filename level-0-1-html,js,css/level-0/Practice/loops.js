//loops: running a particular line of code multiple times; for loop: 2 numbers, increment amount, tell it where to start counting, what to count by  and it will continue until it is told to stop. 
//variable=what number to start counting at, letter 'i' = iterator. ++:  increment operator, --: decrement operator
for (var i = 0; i < 100; i++) {
    console. log (i)
}
// for loop runs 100 times; 
//for(var i = 25; i ===20; i++) add a stopping point; this number is infinite 
//practice: start at the number 0 ends at 100 and run code 
  for(var i = 0; i < 100; i++) {
    console.log (i)
 }
// practice: make it run 10 times and console log "I'm getting good at for loops!"
for(var i = 0; i < 10; i++)
  console.log ("I'm getting good at for loops!")

var favFoods = ["pizza", "pasta", "ice cream", "banana", "tacos", "burritos"] 
favFoods.length //4

//try to console log this array w/o for loop. the parenthesis selects your var! 
  console.log(favFoods[0])
 console.log(favFoods[1])
  console.log(favFoods[2])
 console.log(favFoods[3])
  //the only thing that is changing here is the array. so write a for loop; instead of harcoding each array
  
  // for(var i = 0; i < favFoods.length; i++)
  //    console.log(favFoods[i]) //use for loops to iterate arrays; using 'i' allows the for loop to iterate 

  // var numbers = [1, 2, 3, 4, 5, 6]
  // //console log only even numbers w/o writing line X line--create for loop 

  // for (var i = 0; i < numbers.length: i++) {
  //   if (numbers[i] % 2 === 0) {
  //     console.log(numbers[i])
  //   } //means everytime a for loop runs it is gonna ask a question on each loop; in the for loop; use modulo(%) for the remainder operator. it is used here to generate a remainder of the division equation. 
  
  // this reads if the numbers in my array are divided by 2 and they equal zero then console.log all those numbers only since any EVEN number divided by 2 is zero. 
  // // }

//while loop:  

var count = 0

while (count < 10) {
 console.log('hi')
  count++
}