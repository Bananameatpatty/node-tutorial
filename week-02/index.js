import { readFileSync, writeFileSync, readFile } from 'fs'

const textFromAFile = readFileSync('./text/input.txt', 'utf-8')
console.log(textFromAFile)

const textToAfile = `Some random bs`
writeFileSync('./text/output.txt', textToAfile)

const readFromAFile = readFileSync('./text/output.txt', 'utf-8')
console.log(readFromAFile)


//this is the non blocking way 
readFile('./txt/input.txt', 'utf-8', (err , data) => {
  console.log(data);
})
