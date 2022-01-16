-- contando registros da tabela
select COUNT(*) from produto; 

-- Usando alias
select COUNT(*) as "Quantidade de Produtos" from produto; 


-- Agrupando dados por características em comum

select sexo, COUNT(*) from pessoas GROUP BY sexo; 