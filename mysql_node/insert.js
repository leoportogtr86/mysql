const mysql = require('mysql')


//criando a conexao com o banco de dados

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '151187',
    database: 'cadastro'
})


let sql = `insert into pessoas (nome, idade, altura) values ("Davi", 4, 1.50)`

connection.query(sql, (err, res) => {



    console.log(res)
})