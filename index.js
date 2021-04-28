const fs = require('fs');
const wstream = fs.createWriteStream('docs-no-nb.str')
const jsonObj = {}

wstream.write(jsonObj + '\n')
