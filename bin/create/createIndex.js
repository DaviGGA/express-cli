import * as fs from 'node:fs/promises';
import { getPath } from '../utils/getPath.js';
import ora from "ora";

export async function createIndex(options) {
    const spinner = ora("Creating index file...").start()
    
    const PATH = getPath("src/index.js");
    
    const file = await fs.open(PATH, 'ax'); 
    await file.writeFile(getFileContent(options.port, options.esm));
    await file.close();

    spinner.succeed("Index file successfully created.");
}

function getFileContent(port,esm) {
    const importExpress = esm ? 
    'import express from "express"' : "const express = require('express')"

    const fileContent = `${importExpress}

const app = express()
const port = ${port}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('Example app listening on port ' + ${port})
})
    `

    return fileContent
}