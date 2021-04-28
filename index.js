const fs = require('fs')
const textFiles = []

fs.readdir('./docs-wolaytta', { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  files.forEach(file => {
    textFiles.push(file.name)
    // console.log(file.name)
  })
  console.log(textFiles)
  // trigger streaming function
  //   a: read a file
  //   b: process to paragraph array
  //   c: push to nd-json file
})
