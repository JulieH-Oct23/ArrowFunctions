// ES5 Map Callback
function double(arr) {
    return arr.map(function(num) {
      return num * 2;
    });
  }

//   ES2015 Arrow function shorthand
const twoFold = arr => arr.map(val => val * 2);

// Refactor all to use arrowfunction  
const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)