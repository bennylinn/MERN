// destructuring

// const [a, b, c] = [10, 20];
// console.log("a:", a)
// console.log("b:", b)
// console.log("c", c)

// const [a, b, ...rest] = [10, 20, 30, 40, 50, 60];
// console.log("a:", a)
// console.log("b:", b)
// console.log("rest", rest)

// const {a, b, c} = {"a": 10, "b": 20};
// console.log("a:", a)
// console.log("b:", b)
// console.log("c:", c)

const {a, b, ...rest} = {"a": 10, "b": 20, "c": 30, "d": 40, "e": 50};
console.log("a:", a)
console.log("b:", b)
console.log("rest:", rest)