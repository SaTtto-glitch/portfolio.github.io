const express = require('express')
const React = require('react')
const { renderToString } = require('react-dom/server')

const App = require("../src/App");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/*", (req, res) => {
  const reactApp = renderToString(App />);

  const indexFile = path.resolve("../dist/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`));
  });
});

app.use(express.static("../dist", { index: false }));

app.listen(9000);
