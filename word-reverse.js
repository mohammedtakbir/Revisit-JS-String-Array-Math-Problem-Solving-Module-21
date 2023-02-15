function wordReverse(text) {
    const split = text.split(' ');
    let reverseWord = '';
    for (let i = split.length - 1; i >= 0; i--) {
        reverseWord += ' ' + split[i];
    }
    return reverseWord.trimStart();
}
const res = wordReverse('I am a Web Developer');
console.log(res);