import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "../src/App";
import { renderToString } from "react-dom/server";
import path from "path";
import fs from "fs";

const express = express();

express.get("/*", (req, res) => {
  const reactApp = renderToString(<App />);

  const templateFile = path.resolve("../dist/index.html");

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`));
});
