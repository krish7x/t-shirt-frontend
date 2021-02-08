const express = require('express');
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 9000;

app.listen(PORT, ()=> {
    console.log(`App is running at port ${PORT}`);
});

