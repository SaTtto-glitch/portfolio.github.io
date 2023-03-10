import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from '../src/App';
import { renderToString } from "react-dom/server";

const express = express();

express.get("/*",(req,res))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)