/*
    If you can't sleep, just count sheep!!
    Task:

    Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


*/
//my function
var countSheep = function (num){
    
    let count = []
    for(i = 1; i <= num;i++)
        count.push(`${i} sheep...`)  
    return count.join("")
}

//best on codewars
var countSheep = function (num){
    
    let str = ""
    for(i = 1; i <= num;i++)
        str += `${i} sheep...`
    return str
}

