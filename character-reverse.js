function characterReverse(text) {
    console.log(text);
    let reverse = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reverse += text[i]
    }
    console.log(reverse)
}
characterReverse('I am a Web Developer');