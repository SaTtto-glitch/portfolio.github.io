import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "../src/App";
import { renderToString } from "react-dom/server";
import express from "express";

const app = express();

app.use(express.static('../dist',{ index:false }))

app.get("/*", (req, res) => {
  const reactApp = renderToString(<App />);


    return res.send(data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`));
});
