const fs = require('fs');


let x = [{
  "data" : "rohit",
  "name" : "awesome"
}]

let buffer = JSON.stringify(x, null, 2)

var y = "export this.x = " + buffer;


fs.writeFile(__dirname + '/../temp/file.txt', y , 'utf-8', (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
});