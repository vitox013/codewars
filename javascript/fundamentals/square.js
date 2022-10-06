function squareSum(numbers){
    return numbers.length ? numbers.map(num => Math.pow(num,2)).reduce((v, ele) => v + ele): 0
}

console.log(squareSum([]))

//Best solution on codewars
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }