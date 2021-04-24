const fs = require('fs');


// -----------------------Buffers
var buffer1 = Buffer.alloc(10);
var buffer2 = Buffer.from([1,2,3,4, 17]);
var buffer3 = Buffer.from('Hello World', 'utf-8');

var lenght = buffer3.write('more info', buffer3.length-1);

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);
console.log(lenght);
console.log(buffer3.toString('utf-8'));


//------------------------------ Streams
const file1 = fs.createReadStream('./buffer-opperations/cv2.docx');
const file2 = fs.createWriteStream('./buffer-opperations/test1.txt');

file1.on('data', (data) => {
    console.log('receiving: ', data.toString('utf-8'));       
    //la lectura es por batches, por eso hay que ir guardando en una variable externa con += y no = 
})
file1.on('end', () => {
    console.log('Ended receiving');
})

file2.write('This is just a test')
