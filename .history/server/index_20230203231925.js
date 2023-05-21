import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from '../src/App';
import { renderToString } from "react-dom/server";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)