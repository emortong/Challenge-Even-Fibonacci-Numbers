/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

function _sumFibs( maxFibValue ) {
  var fibs = [1, 2];
  var sum = 0;

  for(var i = 1; i < maxFibValue; i++) {
    var nextFib = fibs[i] + fibs[i-1];

    if(nextFib <= maxFibValue) {
      fibs.push(nextFib);
    }
    if(fibs[i]%2 === 0) {
      sum += fibs[i];
    }
  }

  return sum;
}

console.log(_sumFibs(13));





// bonus round
function _highestFibonacciNumber (maxFibValue){
  var fibs = [1, 2];
  var highest = 0;

  for(var i = 1; i < maxFibValue; i++) {
    var nextFib = fibs[i] + fibs[i-1];
    if(nextFib < maxFibValue) {
      fibs.push(nextFib);
    }
  }

highest = fibs[fibs.length-1];
console.log(highest)

  return highest;
};

console.log(_highestFibonacciNumber (13))


/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};