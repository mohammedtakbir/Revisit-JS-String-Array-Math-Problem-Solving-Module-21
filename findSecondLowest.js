//* write an function to get second lowest value from an array using while loop
const arr = [148, 102, 214, 147, 123, 285, 265, 270, 147];
const findSecondLowest1 = (numbers) => {
    let i = 0;
    let lowest = numbers[0];
    let secondLowest = numbers[0];
    while (i < numbers.length) {
        const number = numbers[i];
        if(number < lowest){
            lowest = number
        }else if(number < secondLowest && number !== lowest){
            secondLowest = number
        }
        i++;
    }
    return {lowest, secondLowest}
}
const {secondLowest} = findSecondLowest1(arr);
console.log(secondLowest);


//* using sort
const findSecondLowest2 = (numbers) => {
    const secondLowest = numbers.sort((a, b) => a - b)
    return secondLowest[1]
}
const res = findSecondLowest2(arr);
console.log(res)