/* Memoization */

// Using memoization [O(n)] to optimize Fibonacci sequence calculation solved initially with recursion [O(n^2)]


function fibonacciMaster() {
    let cache = {}; // hashtable

    return function fib(n) { //closure
        if(n in cache) {
            return cache[n];
        } else {
            if(n < 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}

fibonacciMaster()(10)

