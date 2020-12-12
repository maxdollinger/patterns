//simple factorial function
function factorial(i) {
    return i > 1 ? i * factorial(--i) : 1;
}

//calculates the n-th number in the fibonacci sequence
function fibonacci(n) {
    return n > 2 ? ( fibonacci(n-1) + fibonacci(n-2) ) : 1;
}

//sum all numbers in an arr
function sumArr(arr) {
    return arr.length > 0 ? arr[0] + sumArr(arr.slice(1)) : 0;
}

