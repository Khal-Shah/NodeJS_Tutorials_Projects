//There are two ways of doing it: Sync and Async

// const fs = require('fs');

//alt way: fs has methods readFileSync and writeFileSync
const {
    readFileSync,
    writeFileSync
} = require('fs');

//readFileSync method
const first = readFileSync('./utils/content/first.txt', 'utf8');
console.log(first);

const second = readFileSync('./utils/content/second.txt', 'utf8');
console.log(second);

//write to a file (creating written-file.txt in this case because this file doesn't exist)
writeFileSync('./utils/content/written-file.txt', `This is a file written via the fs module\n ${first} \n ${second}`);

//if the file existed, it'd overrite it.
writeFileSync('./utils/content/written-file.txt', `The content of this file was overwritten via the fs module.`);

//How to append? - You'd pass in a 3rd argument flag (a for appending)
writeFileSync('./utils/content/written-file.txt', `\nThis portion of the text was appended`, {
    flag: 'a'
});