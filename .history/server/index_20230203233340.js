import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "../src/App";
import { renderToString } from "react-dom/server";
import path from 

const express = express();

express.get("/*", (req, res) => {
  const reactApp = renderToString(<App />);

  const templateFile = path.resolve("../dist/index.html");
  fs.readFile(templateFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
        );
  });
});
