/*
Exercise 3: File Management using CommonJS syntax
Instructions
    Create a file named fileManager.js.
    Inside fileManager.js, define a module that exports functions for reading and writing files.
        Export functions named readFile and writeFile.
        Implement the readFile function to read the content of a specified file using the fs module.
        Implement the writeFile function to write content to a specified file using the fs module.
    Create a file “Hello World.txt” containing the sentence “Hello World !! “
    Create a file “Bye World.txt” containing the sentence “Bye World !! “
    Create another file named app.js.
    In app.js, import the functions from the fileManager.js module.
    Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.
    Run app.js and verify that the file reading and writing operations are successful.
*/
const fs = require ("fs"); 


function readFile(file_name){
    try {
        let read_data = fs.readFileSync(file_name, 'utf-8');
        console.log('Read data from', file_name, ':');
        console.log(read_data);
    } catch (error) {
        console.log(error);
    }
};

function writeFile(file_name, data){
    try {
        fs.writeFileSync(file_name, data);
        console.log('Data successfully written');
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    readFile,
    writeFile
}