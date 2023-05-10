const tasksModel = require('../models/tasksModel');
// importando toda model 

const getAll = async (_req, res) => {

const tasks =  await tasksModel.getAll();

//recebe o retorno da taskmodel 
return res.status(200).json(tasks);
};

//função que faz uma request e cadastrar a nova task, salvando o que ta sendo enviado no body. 
 

const createTask = async (req, res) => {

const createdTask = await tasksModel.createTask(req.body);

    return res.status(201).json(createdTask)
};

const deleteTask = async (req, res) => {
    const { id } = req.params;

    await tasksModel.deleteTask(id);
    return res.status(204).json();
};

const updateTask = async (req, res) =>{
    const { id } = req.params;

    await tasksModel.updateTask(id, req.body);
    return res.status(204).json();
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};