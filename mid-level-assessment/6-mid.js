// # Code Challenges:


// ### **Extract Initials:**

// Write a function called **`extractInitials`** that takes an array of full names and returns a new array containing only the initials of each name.

function extractInitials(names) {
  //separate first and last name so they can be mapped over separately 
  const splitNames = names.map(name => {
    const [firstName, lastName] = name.split(' ')
    return {firstName, lastName}
    })
    //put them in new arr
    //return index 0 of each 
    const indexedNames = splitNames.map(name => {
        return name.firstName[0] + name.lastName[0]
})
return indexedNames
}

const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log("RESULTS #1: ", initialsArray); // Output: ['JD', 'AJ', 'BS']
//this works but i am getting an undefined from somewhere

// ### **Filter Object Array by Property:**

// Write a function called **`filterByProperty`** that takes an array of objects and a property name as input. The function should return a new array containing only the objects that have a specific value for the given property.

//### when given  an arr of objects (people), the propertyname (country), and the property value(USA). 
//this function will filter the through the arr to verify the propertyName matches the value.
//if it matches it create a new arr with these matches called filtered objects

function filterByProperty(objects, propertyName, propertyValue) {
    //filter through arr 
    //pass in params
    const filteredObjects = objects.filter(object => object[propertyName] === propertyValue)
    //return new arr with filtered results
    return filteredObjects
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
console.log("RESULTS #2: ",filteredByCountry);

const filteredByAge = filterByProperty(people, "age", 25)
console.log("RESULTS #3: ", filteredByAge)


// Write a function called createTable(rows, columns) - done

// take two parameters: rows (number of rows) and columns (number of columns)-done
//The function should generate a table represented as an array of arrays,
// Each inner array represents a row and contains the row's data 
//Each cell in the table should contain the product of its row index and column index

//concrete imperative
function createTable(rows, columns){
    const table=[];

    for(let i =0; i < rows; i++){
        const row=[]
        for(let j=0; j <columns; j++){
            row.push(i*j)
    }
    table.push(row)
}
return table;
}

//abstract declarative
//this works awesome
// function createTable(rows, columns) {
//     const table = Array.from({ length: rows }, (param, rowIndex) =>
//       Array.from({ length: columns }, (param, colIndex) => rowIndex * colIndex)
//     );
  
//     return table;
//   }

// Test the function with different values
const table1 = createTable(3, 4);
console.log('RESULTS1:', table1);

/* Expected Outcome:
[
  [0, 0, 0, 0],
  [0, 1, 2, 3],
  [0, 2, 4, 6]
]
 */

//R0-0123
//R1-0123
//R2-0123

//R0-01234
//R1-01234
//R2-01234
//R3-01234
//R4-01234


//0 * 0, 0 * 1, 0 * 2, 0 * 3
// 1 * 0, 1 * 1, 1 * 2, 1 * 3
// 2 * 0, 2 *1, 2 * 2, 2 * 3

const table2 = createTable(5, 5);
console.log('RESULTS2', table2);