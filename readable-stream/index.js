const fs = require('fs');
 
const readableStream = fs.createReadStream('./rearticle.txt', {
    highWaterMark: 5
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});
