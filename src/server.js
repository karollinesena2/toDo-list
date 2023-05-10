const app = require ('./app')

require('dotenv').config();
//Ou para executar as configurações de várias de ambiente, e por isso foi instalado o dotenv

const  PORT = process.env.PORT || 3333;
//declarando a variavel de ambiente PORT 

//função para chamar a port em que vai ser executado o código.. 

app.listen(PORT, ()=> console.log(`erver running or port ${PORT}`));