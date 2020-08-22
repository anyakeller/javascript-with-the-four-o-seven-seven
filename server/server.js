const path = require("path");
const express = require("express");


const app = express();
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const PORT = process.env.PORT || 3001;

app.use(express.static(DIST_DIR));

app.get('/api', (req, res) => {
  res.send("adsfasdfasd");
});

// serve react
app.get("/",(req, res) => {
  console.log("serving react");
  res.sendFile(HTML_FILE);
});

app.listen(PORT, function () {
 console.log('App listening on port: ' + PORT);
});
