const fs = require ('fs');

let dir_content = fs.readdirSync('./');

console.log(dir_content);