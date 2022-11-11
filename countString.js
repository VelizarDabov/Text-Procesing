function countString(text, word){

let wordsCounter = text.split(' ').filter(w => w === word).length
console.log(wordsCounter);

}
countString('This is a word and it also is a sentence', 'is')