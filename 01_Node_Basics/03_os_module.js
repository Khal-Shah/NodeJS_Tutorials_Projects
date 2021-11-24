//OS Module: interacting with operating system and server

const os = require('os');

// console.log(os);

//info about current user
const user = os.userInfo();
// console.log(user);

//up-time of system
const sysUpTime = os.uptime();
console.log(sysUpTime + " seconds or since ");
let startOfSys = new Date(Date.now() - (1000 * sysUpTime));
console.log(startOfSys);

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total memory in system is ${totalMemory} and free memory is ${freeMemory}`);

const userOSType = os.type();
console.log(`You're using ${userOSType} with release version ${os.release()}`);