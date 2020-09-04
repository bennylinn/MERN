// setTimeout( <function>, <number> )

// function exampleFunction(message) {
//     console.log(message)
// }

// function parentFunction(callback) {
//     callback("information from parent")
// }

// exampleFunction("example message")
// // parentFunction(exampleFunction);

// parentFunction( // call parent function
//     function(message){ console.log(message) } // anonymous function
// )

// example use cases
/*

*/

// running code after an event
// making api calls
// querying a database
// ---> basically asynchronous tasks

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);


// Making a copying of an array
//                 = {el1}, {el2},...
const needThyme = [...groceryList, {"item": "thyme", "haveIngredient": false}]

// Concat: concatenates two arrays and returns new array
const needThyme2 = groceryList.concat([ {"item": "thyme", "haveIngredient": false} ])
console.log("needThyme2", needThyme2)
console.log("groceryList", groceryList)

// Push: modifies orginal array
try {
    groceryList.push()
} catch(error) {
    console.log(error);
}

needThyme.push({"item": "mussels", "haveIngredients": false})
console.log("needThyme", needThyme)

// Slice: returns new array/iteration between given indices (p, q) indices p --> < q
sliced = [...groceryList.slice(0,4), {...needThyme[5], "haveIngredient": true}]
console.log(sliced)

// Sort: manipulate array
try {
    groceryList.sort()
} catch(e) {
    console.log(e)
}

//                                              compareFn must return number, instead of true/false
const sortedGroceries = [...groceryList].sort( (a, b) => (a.item > b.item) ? 1 : -1 );

console.log(sortedGroceries);

const strings = ["carrots", "onions", "celery", "cremini", "butter"];
strings.sort( (a, b) => (a > b) ? 1 : (a === b) ? 0 : -1 );


// Map: do smth to each element in array, then return the new array
const liList = strings.map( (string) => `<li>${string}</li>` )
console.log(liList)

// Filter: filter based on conditiong, return new arr
const filter = strings.filter( item => item.includes("o") )
console.log(filter)
console.log(strings)

// Reduce: do smth to each element in array, in an accumulated fashion
const reduceTest = strings.reduce( (accumulator, item) => accumulator+item )
console.log(reduceTest)




