import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "../src/App";
import { renderToString } from "react-dom/server";

const express = express();

express.use(express.static('../dist',{ index:}))
express.get("/*", (req, res) => {
  const reactApp = renderToString(<App />);


    return res.send(data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`));
});
