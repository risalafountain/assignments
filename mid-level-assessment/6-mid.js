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