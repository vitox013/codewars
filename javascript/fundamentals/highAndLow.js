function highAndLow(numbers){
    const newArr = numbers.split(" ").map((v) => parseInt(v));
    return `${Math.max(...newArr)} ${Math.min(...newArr)}`;
  }

// Best solution on codewars
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }