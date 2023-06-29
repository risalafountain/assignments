//Use the rest operator to help this function return an array of animals

function collectAnimals(...animals) {
    console.log(animals)
    return animals
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

