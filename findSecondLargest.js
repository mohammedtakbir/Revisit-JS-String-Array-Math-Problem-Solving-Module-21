//* how to get the second largest element from an array
const arr = [148, 102, 214, 147, 123, 285, 265, 270, 147];
function findSecondLargest(numbers) {
    //* using for of loop
    // let largest = numbers[0];
    // let secondLargest = numbers[0];
    // for (const number of numbers) {
    //     if (number > largest) {
    //         largest = number
    //     } else if (number > secondLargest && number !== largest) {
    //         secondLargest = number
    //     }
    // }
    //* using sort method
    const secondLargest = numbers.sort((a, b) => b-a)
    return secondLargest[1];
}
const res = findSecondLargest(arr);
console.log(res)
