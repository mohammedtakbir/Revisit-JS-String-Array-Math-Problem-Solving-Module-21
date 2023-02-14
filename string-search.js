const string = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.';

const searchString = 'meaningfuL';
//* string.includes()
// console.log(string.toLowerCase().includes(searchString.toLowerCase()));
// console.log(string.toLowerCase().includes('withouT'.toLowerCase()))

//* string.indexOf()
console.log(string.indexOf('may'))
// if(string.indexOf('Lorem', 180) !== -1){
//     console.log('Exist')
// }else{
//     console.log("Doesn't Exist")
// }

//* string.startWith()
// console.log(string.startsWith('g', 12)) //* returns true/false

//* string.endsWith();
const fileName = 'photo.jpg'
// console.log(fileName.endsWith('.jpg'))
// console.log(string.endsWith('.'))