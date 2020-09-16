const mysql = require('mysql')


//criando a conexao com o banco de dados

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '151187',
    database: 'cadastro'
})


//iniciando uma conexao

connection.connect((err) => {

    if (err) {

        console.log(err)
    } else {

        console.log('conexão estabelecida')
    }
})


let sql = `select * from pessoas`


connection.query(sql, (err, res) => {

    console.log(res)



})







//finalizando a conexao

connection.end((err) => {

    if (err) {

        console.log(err)
    } else {

        console.log('conexão finalizada')
    }


})