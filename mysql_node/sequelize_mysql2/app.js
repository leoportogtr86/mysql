const sequelize = require('sequelize')
const con = require('./db/db')


con.authenticate().then(() => {

    console.log('conexão estabelecida')


}).catch((err) => {

    console.log(`Erro: ${err}`)
})


const Pessoa = con.define('pessoa', {

    nome: {

        type: sequelize.STRING,
        allowNull: false
    },

    idade: {

        type: sequelize.INTEGER,
        allowNull: false
    },

    profissao: {

        type: sequelize.STRING,
        allowNull: false
    }


})

Pessoa.sync({ force: false }).then(() => {

    console.log('tabela criada.')
})

Pessoa.create({

    nome: 'Leo Porto',
    idade: 34,
    profissao: 'músico e dev'

}).then(() => {

    console.log('dados salvos')
})