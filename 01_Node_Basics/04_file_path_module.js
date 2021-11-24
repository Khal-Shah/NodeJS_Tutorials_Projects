const path = require('path');

//platform specific separator (/ vs \)
const separator = path.sep;
console.log(`The separator is ${separator}`);

//joins two or more parts of a path
const textFilePath = path.join('/utils/', '/content', 'text-file.txt');
console.log(textFilePath); //\utils\content\text-file.txt

//basename returns only the last portion (file name)
const base = path.basename(textFilePath);
console.log(base); //text-file.txt

const abs = path.resolve(__dirname, 'utils', 'content', 'text-file.txt');

console.log(`The absolute file path created is ${abs}`);