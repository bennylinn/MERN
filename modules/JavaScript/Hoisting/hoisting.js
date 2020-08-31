var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);

// var foo; declaration created and hoisted to the top
// function magic(){ also hoisted to the top
//      var foo; declaration scoped and hoisted within function
//      foo = "hello world";
//      console.log(foo);
// }
// foo = "bar"; defined here

// magic(); output of magic()
// console.log(foo); output print definition of foo

magicalUnicorns();
var magicalUnicorns = function(){
    console.log("Will it blend?");
}
console.log("Don't breathe this!");

// var magicalUnicorns; declaration created and hoisted
// magicalUnicorns();
// magicalUnicorns = function(){ declaraction doesn't get hoisted
//      console.log("Will it blend?"); yes it will
// }
// console.log("Don't breathe this!"):