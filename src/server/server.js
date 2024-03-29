const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
//var dotEnv = require('dotenv').config();
const PORT = 3000
const db = require('../db/database')

app.use(bodyParser.json());
app.use(morgan("dev"));


app.use(express.static("dist"));
//app.use(express.static(path.join(__dirname + '../../dist')))

app.get('/list', (req, res) => {
  console.log('get request')
  db.getAllBooks()
  .then((result) => {
    res.send(result)
  })
  .catch((err) => res.send(404))
})

app.post('/save', (req, res) => {

  return db.saveBook(req.body.id, req.body.author, req.body.title, req.body.image, req.body.link, req.body.description)
  .then(() => res.sendStatus(201))
  .catch(err => res.sendStatus(404))
})

app.delete('/delete', (req, res) => {

  db.deleteBook(req.body.id)
  .then(() => res.send(201))
  .catch(err => res.send(404))
})

app.listen(PORT, () => console.log('Listening on port', PORT))