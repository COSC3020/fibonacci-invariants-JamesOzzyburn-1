function fib(n) {
    if (n == 0) { // If n is 0 return [0] by definition of fib
        return [0];
    }
    else if (n == 1) { // If n is 1 return [0, 1] by definition of fib
        return [0, 1];
    }
    arr = fib(n - 1); // Make an array and recursivly call fib minus one
    return arr.concat(arr[n-1] + arr[n-2]); // return the array with the new value
}