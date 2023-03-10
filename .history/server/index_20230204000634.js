import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "../src/App";
import { renderToString } from "react-dom/server";
import express from "express";
import path from 'path';
import fs from 'fs';

const app = express();

app.use(express.static("../dist", { index: false }));

app.get("/*", (req, res) => {
  const reactApp = renderToString(<App />);

  const indexFile = path.resolve('../dist/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`))
  });
  ;
});
