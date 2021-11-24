//Modules: encapsulated code

//To get access to function sayHi and const names (utils files)
const names = require('./utils/02_names');
const hi = require('./utils/01_module_example');

// console.log(names);
// console.log(hi);

hi.sayHi(names.name1);
hi.sayHi(names.name2);

//import 03_export_on_the_go
const months = require('./utils/03_export_on_the_go');
console.log(months);

//mind_grenade.js
require('./utils/04_mind_grenade')