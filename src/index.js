import React from 'react';
import ReactDOMServer from 'react-dom/server';
import './index.css';
import express from 'express';
import App from './App';
//import * as ServiceWorker from './serviceWoker';
import {BrowserRouter} from 'react-router-dom';

const app = express();

const serverRender = (req, res, next)=>{
  const context = {};
  const jsx = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const root = ReactDOMServer.renderToString(jsx);
  res.send(root);
};

app.use(serverRender);


app.listen(5000, ()=>{
  console.log('run');
});
//ServiceWorker.unregister();