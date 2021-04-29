const fs = require('fs')
const wnn = require('words-n-numbers')
const path = './docs-wolaytta'
let docs = []

// console.log(textFiles)
// No triggering streaming function, just do it simple and see if it is enough
//   a: read directory
//   b: read all files
//   c: process to chunks (extract words and create chunks)
//   d: write to nd-json file

//   a: read directory
fs.readdir(path, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  files.forEach(file => {
    const filePath = path + '/' + file.name
    console.log(filePath)

    //   b: read all files
    readFile(path + '/' + file.name)
  })
  console.log(JSON.stringify(docs))
})

function readFile (filePath) {
  const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
  // console.log(data)
  docs.push(data)
  // need to push to array docs
}

function processFiles () {
  // some wnn-stuff
}
