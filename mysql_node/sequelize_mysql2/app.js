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

    nome: 'Chris Porto',
    idade: 32,
    profissao: 'fono'

}).then(() => {

    console.log('dados salvos')
})

Pessoa.findAll({ raw: true }).then((data) => {

    console.log(data)
})