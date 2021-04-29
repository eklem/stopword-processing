# stopword-processing
Misc tools for processing different text sources, preparing to create stopword lists for different languages.

## create nd-json from Wolaytta text files
End result is to be processed with [`stopword-trainer`](https://github.com/eklem/stopword-trainer) to create a stopword list.

### Usage
Fork project

```console
npm install
```

Copy files to `docs`-folder

```console
node index.js
```

Outputs to `wolaytta-words.str`. Use this with `stopword-trainer`.
