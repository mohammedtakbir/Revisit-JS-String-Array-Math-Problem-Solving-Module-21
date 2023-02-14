const arr = [20, 35, 15, 85, 75, 95];
// console.log(arr)
arr[0] = 99;
// console.log(arr)

const str = 'Takbir';
str[0] = 'A';
// console.log(str) //* string is immutable. That's why it is not change the original string.

const firstName = 'ena ';
const lastName = 'poribohon';
const fullName = firstName + lastName;
// console.log(fullName)
let first = 'Hanif';
first += ' poribohon';
console.log(first)