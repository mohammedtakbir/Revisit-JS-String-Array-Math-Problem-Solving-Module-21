//* write a function that will take 3 numbers and return the maximum numbers using if---else
const bela = 85;
const isabela = 90;
const jabela = 92;
// if (bela > isabela && bela > jabela) {
//     console.log('bela')
// } else if (isabela > bela && isabela > jabela) {
//     console.log('isabela')
// } else {
//     console.log('jabela')
// }

//* write a function that will take 3 numbers and return the maximum numbers using Math.max()
// console.log(Math.max(bela, isabela, jabela))

//* write a function that will take 3 numbers and return the maximum numbers using Math.min()
function max(numbers){
    return Math.min(numbers)
}
const res = max(bela, isabela, jabela);
console.log(res)