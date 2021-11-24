const {
    readFile,
    writeFile
} = require('fs');

//for async (readFile and writeFile methods of fs) we need to provide a callback: sent in arg of function, which once original func is done it runs the cb

// console.log('Start...');
readFile('./utils/content/first.txt', 'utf8', (err, result) => {
    //if there's an error then just return null
    // if (err) {
    //     console.log(err);
    //     return;
    // }

    // console.log(result);
    const first = result;
    validateErr(err, result)

        //Now readFile again for the second file
        .then(readFile('./utils/content/secosand.txt', 'utf8', (err, result) => {
            //if there's an error then just return null
            // if (err) {
            //     console.log(err);
            //     return;
            // }
            const second = result;
            // console.log(second);
            validateErr(err, result)

                //Now write to file
                .then(writeFile('./utils/content/result-async.txt', `The content of the two files read via readFile were ${first}\n${second}`, (err, result) => {
                    // if (err) {
                    //     console.log(err);
                    //     return;
                    // }
                    // console.log('Done with this writeFile task');
                    validateErr(err, result)
                }))
                .catch(err => {
                    console.log("Something went wrong! " + err);
                })
        }));
});

// console.log('Starting next task...');

function validateErr(err, result) {
    return new Promise((resolve, reject) => {
        if (err) {
            reject(err);
        } else {
            console.log(result);
            resolve();
        }
    })
};