const fs = require('fs')

fs.readFile('./text/input.txt' , 'utf-8' , (err,data)=>{
  fs.readFile(`./text/${data}.txt`, 'utf-8' , (err,data1)=>{
    console.log(data1)
    fs.writeFile('./text/output.txt', `${data1}\n${data}` , err => {
      console.log("The new file has been written")
    })
  })
})
console.log("Will read file")
console.log("Either file is getting read")
console.log("Else file has been read")
