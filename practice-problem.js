//* problem-01----> write a function that reverse characters from a string
// function reverseCharacters(text) {
//     let i = text.length - 1;
//     let reverseCharacters = '';
//     while (i >= 0) {
//         reverseCharacters += text[i]
//         i--;
//     }
//     console.log(reverseCharacters)
// }
// reverseCharacters('I am Web Developer');


//* problem-02----> write a function that reverse words from a string
// function reverseWords(text){
//     const split = text.split(' ');
//     let reverse = [];
//     for(let i = split.length -1; i>=0; i--){
//         reverse.push(split[i])
//     }
//     console.log(reverse.join(' '))
// }
// reverseWords('I am Web Developer')



//* problem-03----> fibonacci sequences
//* 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// const fibo = [0, 1];
// for (let i = 2; i <= 15; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2]
// }
// console.log(fibo)



//* problem-04----> write a function that get the largest number from an array
const arr = [148, 102, 214, 147, 123, 285, 265, 270, 147];
// const findLargest = (numbers) => {
//     let largest = numbers[0];
//     let i = 0;
//     while(i < numbers.length){
//         const number = numbers[i];
//         if(number > largest){
//             largest = number
//         }
//         i++;
//     }
//     return largest;
//     return Math.max(...numbers)
// }
// const res = findLargest(arr);
// console.log(res);


//* problem-05----> write a function that get the second largest number from an array
// function findSecondLargest(numbers) {
//     //* using sort---easy way
//     // const secondLargest = numbers.sort((a, b) => b-a);
//     // return secondLargest[1]

//     //* using for--of loop
//     let largest = numbers[0];
//     let secondLargest = numbers[0];
//     for (const number of numbers) {
//         if (number > largest) {
//             largest = number
//         } else if (number > secondLargest && number !== largest) {
//             secondLargest = number
//         }
//     }
//     return { largest, secondLargest }
// }
// const { secondLargest } = findSecondLargest(arr);
// console.log(secondLargest)



//* problem-06----> write a function that get the Lowest number from an array
// function findLowest(numbers) {
//     let lowestNumber = numbers[0];
//     numbers.forEach(number => {
//         if (number < lowestNumber) {
//             lowestNumber = number
//         }
//     })
//     console.log(lowestNumber)
// }
// findLowest(arr);


//* problem-07----> write a function that get the second Lowest number from an array
// const findSecondLowest = (numbers) => {
//     let lowestNumber = numbers[0];
//     let secondLowestNumber = numbers[0];
//     numbers.forEach(number => {
//         if(number < lowestNumber){
//             lowestNumber = number
//         }else if(number < secondLowestNumber && number !== lowestNumber){
//             secondLowestNumber = number
//         }
//     })
//     console.log(`lowest: ${lowestNumber}, second lowest: ${secondLowestNumber}`)
// }
// findSecondLowest(arr)

//* problem-08-----> Math operation
// console.log(Math.round(2.3))
// console.log(Math.round(2.6))
// console.log(Math.round(2.5))

// console.log(Math.ceil(2.000001))

// console.log(Math.floor(2.999999999999))

// console.log(Math.round(Math.random()*100))

// console.log(Math.max(...arr))
// console.log(Math.min(...arr))

//* problem-09----> string method
const string = 'In publishing and graphic design. Lorem ipsum is a placeholder text commonly used to demonstrate.';

// console.log(string.split(' '))
// console.log(string.split(''))
// console.log(string.split())
// console.log(string.split('.'))

// console.log(string.slice(2, 10))

// console.log(string.substring(2, 10))

const join = [
    ' In publishing and graphic design',
    ' Lorem ipsum is a placeholder text commonly used to demonstrate',
    ''
]
// console.log(join.join('.').trimStart())

//* problem-10---------> string search method
// console.log(string.includes('And'.toLowerCase()))

// console.log(string.indexOf('design', 10))

//* problem-11-----> string case

// console.log(string.toUpperCase())
// console.log(string.toLowerCase())


