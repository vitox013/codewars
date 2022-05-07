/*
    Build Tower

    Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

    For example, a tower with 3 floors looks like this:

    [
    "  *  ",
    " *** ", 
    "*****"
    ]

    And a tower with 6 floors looks like this:

    [
    "     *     ", 
    "    ***    ", 
    "   *****   ", 
    "  *******  ", 
    " ********* ", 
    "***********"
    ]

*/
//my function
function towerBuilder(nFloors) {
    let space, star, tower = []

    for(i = 1; i <= nFloors; i++){
        space = " ".repeat(nFloors - i)
        star = "*".repeat(2 * i - 1)
        tower.push(`${space}${star}${space}`)
    }

    return tower
}

  
//best on codewars 
function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }

  console.log(towerBuilder(3))