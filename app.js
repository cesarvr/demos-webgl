const express = require('express')
const app = express()
const _ = require('lodash')
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

const link = (demo)=>`<a href="${demo}">${demo}</a>`
const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

let links = (source)=>getDirectories(source).map(folder=> folder.replace('static/','')).map(link) 




app.get('/', (req, res) => res.send(links('static').join('<br>')))
app.use(express.static('./static'))

app.listen(8080, () => console.log('serving demos..!'))

