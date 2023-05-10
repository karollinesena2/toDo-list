const connection = require('./connection')
//função responsável por buscar todas as tasks no banco de dados.
const getAll = async () => {
    //Array destruction - const []
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) => {

 //a função createTask vai pegar o objeto, tirar o titulo, formatar a data. 
    const { title } = task;

    //função que transforma a data no formato UTC. 
    const dateUTC = new Date(Date.now()).toUTCString()    
    
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)'

    const [createdTask] = await connection.execute( query, [title, 'pendente', dateUTC]);

    return {insertId: createdTask.insertId};


};

const deleteTask = async (id) => { 
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id])
    return removedTask;
};

const updateTask = async (id, task) => { 

    const {title, status} = task;

    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?'
 
    const [updatedTask] = await connection.execute(query, [title, status, id]);

    return updatedTask;
}
module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};