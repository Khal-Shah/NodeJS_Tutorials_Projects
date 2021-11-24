//we saw cb hell in our previous 06 ex where we had nested readFile and writeFile (which require cb).
//As we know, we can use .then and .catch to avoid this.

const fs = require('fs');

console.log('Start...');

const first = fs.readFileSync('./utils/content/first.txt', 'utf8');
const second = fs.readFileSync('./utils/content/second.txt', 'utf8');

//write to a file
fs.writeFileSync('./utils/content/written-file.txt', `\nAppending more stuff to this file.`, {
    flag: 'a'
});

console.log(`Done with reading and writing synchronously\nStarting now with asynchronous...`);