const con = require('./db/db')


con.authenticate().then(() => {

    console.log('conexão estabelecida')


}).catch((err) => {

    console.log(`Erro: ${err}`)
})