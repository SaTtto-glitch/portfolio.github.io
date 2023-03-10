import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

//import Test  from "./Test";
const app = express();

app.get("/*", (req, res) => {
  //const reactApp = renderToString(<Test />);

  //const indexFile = path.resolve("../dist/index.html");
  /*fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">aaa</div>`));
  });
});

app.use(express.static("../dist", { index: false }));
app.listen(9000);
