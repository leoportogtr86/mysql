const mysql = require('mysql')


//criando a conexao com o banco de dados

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'cadastro'
})

connection.query('select nome, idade from pessoas', (err, res) => {

    console.log(res)
})