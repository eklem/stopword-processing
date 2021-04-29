const fs = require('fs')
const wnn = require('words-n-numbers')

const path = './docs'
const docs = []
const docsProcessed = []
const outputFile = 'wolaytta-words.str'
let ndJson = ''
const customRegex = '[\\p{Alpha}\'"7]+'
const wnnOptions = {
  regex: customRegex,
  toLowercase: true
}

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
  //   d: write to nd-json file
  processAndWriteDocs(docs)
})

function readFile (filePath) {
  const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
  // populate docs array for processing
  docs.push(data)
}

function processAndWriteDocs (docs) {
  // some wnn-stuff
  docs.forEach(doc => {
    docsProcessed.push(wnn.extract(doc, wnnOptions))
  })
  console.dir(docsProcessed)
  // create nd-json, a little hackish
  docsProcessed.forEach(doc => {
    ndJson = '{"doc":' + JSON.stringify(doc) + '}\n'
    fs.writeFileSync(outputFile,
      ndJson,
      {
        encoding: 'utf8',
        flag: 'a+',
        mode: 0o666
      })
  })
  console.dir(ndJson)
}
