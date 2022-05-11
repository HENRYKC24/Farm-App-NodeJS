const fs = require('fs');
const content = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(content, '>>>>>Content');

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  console.log('First data', data1);
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log('data2=>: ', data2);
    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      console.log('Data 3 => ', data3);
      fs.writeFile('./txt/written.txt', `${data1}\n${data2}\n${data3}`, 'utf-8', (err) => {
        console.log('File successfully written!');
      })
    })
  })
});

console.log('Tis is at the bottom of the file');
