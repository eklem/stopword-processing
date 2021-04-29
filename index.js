const fs = require('fs')
const wnn = require('words-n-numbers')
const path = './docs-wolaytta'
const docs = []

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

  //   b: read all files
  files.forEach(file => {
    const filePath = path + '/' + file.name
    console.log(filePath)
    readFile(path + '/' + file.name)
  })

  //   c: process to chunks (extract words and create chunks)
  processDocs(docs)
})

function readFile (filePath) {
  const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
  // populate docs array for processing
  docs.push(data)
}

function processDocs (docs) {
  // some wnn-stuff
  console.log(JSON.stringify(docs))
}
