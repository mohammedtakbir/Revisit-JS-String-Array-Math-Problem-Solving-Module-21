const userName = 'Mohammed';
const userInput = 'MOhammed';
// if(userName.toLocaleLowerCase() === userInput.toLocaleLowerCase()){ //* toLocaleLowerCase()
if (userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('valid user')
} else {
    console.log('invalid user')
}