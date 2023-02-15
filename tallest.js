//* write a function to get the highest number in an array using while loop
const arr = [102, 214, 147, 123, 159, 258, 357, 152, 256];
// function findHighest(numbers) {
//     let i = 0;
//     let largest = numbers[0];
//     while (i < numbers.length) {
//         const number = numbers[i];
//         if (number > largest) {
//             largest = number
//         }
//         i++;
//     }
//     return largest;
// }
// let largest = arr[0];
// for(const number of arr){
//     if(number > largest){
//         console.log(largest)
//     }
// }

function findHighest(numbers) {
    let largest = numbers[0];
    for (const number of numbers) {
        if (number > largest) {
            largest = number
        }
    };
    return largest
}


const res = findHighest(arr);
console.log(res)