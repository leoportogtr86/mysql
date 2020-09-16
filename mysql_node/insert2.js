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

//objeto com os dados a serem inseridos
const pessoa = {

    nome: 'Lucas Silva',
    idade: 36,
    altura: 1.98,
    nacionalidade: 'Mexicano'
}


//comando sql para fazer uma insercao
let sql = `insert into pessoas set ?`

connection.query(sql, pessoa, (err, res) => {


    if (err) {

        console.log(err)


    } else {

        console.log('dados inseridos com sucesso!')



    }




})







//finalizando a conexao

connection.end((err) => {

    if (err) {

        console.log(err)
    } else {

        console.log('conexão finalizada')
    }


})