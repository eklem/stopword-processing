const fs = require('fs')
const path = './docs-wolaytta'

fs.readdir(path, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  files.forEach(file => {
    let filePath = path + '/' + file.name
    console.log(filePath)
    readFile(path + '/' + file.name)
    // console.log(file.name)
  })
  // console.log(textFiles)
  // No triggering streaming function, just do it simple and see if it is enough
  //   a: read all files
  //   b: process to chunks (extract words and create chunks)
  //   c: write to nd-json file
})

function readFile (filePath) {
  const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
  console.log(data)
}
