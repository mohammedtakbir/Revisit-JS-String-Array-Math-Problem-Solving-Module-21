const arr = [102, 214, 147, 123, 159, 258, 357, 152, 256, 99, 55];
function lowest(numbers){
    //* using for loop
    // let lowest = numbers[0];
    // for(let i = 0; i < numbers.length; i++){
    //     const number = numbers[i];
    //     if(number < lowest){
    //         lowest = number
    //     };
    // };
    // return lowest;

    //* using for--of loop
    // for(const number of arr){
    //     if(number < lowest){
    //         lowest = number
    //     };
    // };
    // return lowest

    //* using sort method
    const lowest = numbers.sort((a, b) => a-b);
    return lowest[0]
}
const res = lowest(arr);
console.log(res);