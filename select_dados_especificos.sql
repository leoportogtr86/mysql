select nome, email from pessoas;

/*poderia ser feita uma busca usando alias (apelidos) tambem*/

select nome as name, idade as age from pessoas;

/*inserindo uma coluna com os dados da data/hora*/

select nome, idade, peso, altura, now() as data_hora from pessoas;