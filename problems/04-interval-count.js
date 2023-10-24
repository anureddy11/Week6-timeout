/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/
/*
1.set a count variable
2. create a closure function
3. call set interval and increment count
4. while count<amount

*/

function intervalCount(cb, delay, amount) {
  // Your code here
  let count=0
  function setint(){
    if(count<amount){
    cb()
    count++
    }
    else{
      clearInterval(val)
    }
  }
  let val = setInterval(setint,delay)

}

intervalCount(function() {
  console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
