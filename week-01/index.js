const fs = require('fs')

const textFromAFile = fs.readFileSync('./text/input.txt', 'utf-8');
console.log(textFromAFile)

const textToAfile = `This is sample output to file experimentation to check if eveyrthing is working as intended \t this is to check the tab and \n this is to check the newline`;
fs.writeFileSync('./text/output.txt', textToAfile)

const readFromAFile = fs.readFileSync('./text/output.txt', 'utf-8')
console.log(readFromAFile)