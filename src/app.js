 // import componentes; 
 
const express = require('express');
const router = require('./router');
const cors = require ('cors');

const app = express();

// usando uma função do express pra receber request no formato json.
app.use(express.json());

// liberando a api pra todos.
app.use(cors());

//toda requisição que acontecer na aplicação, ela vai cair no router.
app.use(router);



module.exports = app;


