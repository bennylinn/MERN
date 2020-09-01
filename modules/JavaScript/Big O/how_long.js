Number.prototype.isPrime = function() {
    for( let i=2; i <= Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) { // 
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


// recursive
const { performance } = require('perf_hooks');
const start1 = performance.now();
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
} // --> O ( 2^N ) slower at cost of memory
console.log(rFib(40));
console.log(`rFib took ${performance.now() - start1} milliseconds to run`);

// // iterative
const start2 = performance.now();
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
} // this runs faster --> O( N )
console.log(iFib(40));
console.log(`iFib took ${performance.now() - start2} milliseconds to run`);

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!"
+ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!"
+ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const { performance : p1 } = require('perf_hooks');
const start3 = p1.now();
const reversed1 = story.split("").reverse().join(""); // split (N-chars) + reverse (N-chars) + join (N-chars)
console.log(`reversed1 took ${p1.now() - start3} milliseconds to run`);

String.prototype.reversed2 = function() {
    let rev2 = "";
    // add to new str (N-chars)
    for (let x of this) {
        rev2 = x + rev2;
    }
    return rev2;
}

const { performance : p2 } = require('perf_hooks');
const start4 = p2.now();
const reversed2 = story.reversed2()
console.log(`reversed2 took ${p2.now() - start4} milliseconds to run`);

