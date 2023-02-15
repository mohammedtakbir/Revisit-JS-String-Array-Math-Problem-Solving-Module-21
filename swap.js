let first = 5;
let second = 10;
console.log(first, second)
// first = second
// second = first
// console.log(first,second)
//* approach-01
// let temp = first;
// first = second
// second = temp
// console.log(first, second)
//* approach-02
[first, second] = [second, first]
console.log(first, second)