
const express = require('express');

// criando uma função Router pra instanciar o router.
const router = express.Router();


const tasksController = require('./controllers/tasksController');
const taskMiddlewares = require ('./middlewares/taskMiddlewares');



//criado uma rota

//recebe
router.get('/tasks', tasksController.getAll);
// Envia
router.post('/tasks', taskMiddlewares.validateFieldTitle, tasksController.createTask);
// Deleta
router.delete('/tasks/:id',  tasksController.deleteTask);
// Atualiza
router.put('/tasks/:id', 
taskMiddlewares.validateFieldStatus,
taskMiddlewares.validateFieldTitle, 
tasksController.updateTask);


module.exports = router;