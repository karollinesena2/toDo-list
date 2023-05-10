//middlewares = toda função que fica intermediando a execução de outra função. 
// middlewares = pasta criada para armazenar todas as funções mediadoras.


// função que validará o corpo da função.
const validateFieldTitle = (req, res, next) => {
    const { body } = req;

    if (body.title === undefined) {
        return res.status(400).json({message: 'the field"title" is required'})
    }
    if (body.title === '') {
        return res.status(400).json({message: 'title cannot be empty'})
    }

    next();
}

const validateFieldStatus = (req, res, next) => {
    const { body } = req;

    if (body.status === undefined) {
        return res.status(400).json({message: 'the field"status" is required'})
    }
    if (body.status === '') {
        return res.status(400).json({message: 'status cannot be empty'})
    }

    next();
}
module.exports = {
    validateFieldTitle,
    validateFieldStatus
}