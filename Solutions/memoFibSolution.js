// The fibonacci sequence calculates n such that n = n-1 + n-2; 
// Further detail can be found here https://en.wikipedia.org/wiki/Fibonacci_number
// calculate the nth number in the fibonacci sequence.
// use memoization to optomize.
// we will start the fib sequence with n=0 => 0 
// fib: [0,1,1,2,3,5,8,13,21...n]
// fib(3) // > 2
// fib(6) // > 8
// fib(800) // > 12586269025

//fib using memoization!
var memoFib = function(n) {
  //create memo object, not supposed to be passed in by user so we keep it hidden and grab from arguments[1]
  var memo = arguments[1] || {};
  //fib behaves differently below 2
  if(n < 2){
    return n;
  }
  //inner memo function to check if n has been calculated before
  var memoize = function(n) {
    if(memo[n]){
      //if calculated previously, return memo
      return memo[n];
    }else{
      //if not calculated, calculate using memoFib, save @ memo[n] & return result
      return memo[n] = memoFib(n, memo);
    }
  };
  //add last two fib(n)s together as per fibonacci sequence
  return memoize(n-1) + memoize(n-2);
};
//############################################################

//recursive fib => very slow
var slowFib = function(n) {
  //fib behaves differently below 2
  if (n < 2){
    return n;
  }
  //add last two ns together as per fibonacci sequence
  return slowFib(n-1) + slowFib(n-2);
};

//#########################################################
//actually faster than memoization
var fastFib = function(n) {
  //count for basecase
  var count = 0;
  return function r(a,b) {
    if(count === n){
      //if our count reaches n return current fib number
      return a;
    }else{
      //increase count until we reach our desired n
      count++;
      //pass in second fib number and calculate new fib number a+b
      return r(b, a + b);
    }
    //start with 0 & 1 because the fib demands it
  }(0,1);
};

console.log(fastFib(50));
// console.time('slowFib');
// for(var i = 0; i < 30; i++){ //<<30 times
//   slowFib(i);
// }
// console.timeEnd('slowFib');

// console.time('memoFib');
// for(var i = 0; i < 200; i++){ //<<200 times
//   memoFib(i);
// }
// console.timeEnd('memoFib');

// console.time('fastFib');
// for(var i = 0; i < 200; i++){ //<<200 times
//   fastFib(i);
// }
// console.timeEnd('fastFib');
