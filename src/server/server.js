const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("dist"));
//app.use(express.static(path.join(__dirname + '../../dist')))

app.get('/', (req, res) => {
  res.send('hello')
})
app.listen(port, () => console.log('Listening on port', port))