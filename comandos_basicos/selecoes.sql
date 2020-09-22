/*selecoes*/

/*vai trazer todos os dados da tabela*/

select * from produto;

/*fazendo uma projecao e pedindo para trazer apenas produtos que tenham nome guitarra (selecao)*/

select * from produto where nome = "guitarra";

/*trazendo agora apenas as colunas de nome e preco do produto de nome violao*/
select nome, preco from produto where nome = "violao";


/*agora vamos fazer uma busca por aproximacao usando o caracter coringa (%)*/
/*vai trazer um produto com nome parecido com "gui" e o % substitui algo que vier depois*/
select * from produto where nome like "gui%"




