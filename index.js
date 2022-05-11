const fs = require('fs');
// const content = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(content, '>>>>>Content');

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  console.log('First data', data1);
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log('data2=>: ', data2);
  })
});

console.log('Tis is at the bottom of the file');
