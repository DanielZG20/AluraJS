//const numeroPares = [2,4,6];
//const numeroImpares = [1,3,5];

//const numeros = [...numeroPares, ...numeroImpares];

// Forma clássica de criar duas variáveis.
//const num1 = 1;
//const num2 = 2;

// Forma diferente de criar duas variáveis.
/* Quando abre os ... ele pega o 
    restante dos números/conteúdo que sobraram e 
    joga na const */
//const [num1, num2, ...outrosNumeros] = [1,2,3,4,5];
//console.log(num1, num2, outrosNumeros);

// Retorna o conteúdo do último.
//const [nome1 = 'Juliana'] = [1];
//console.log(nome1);

// Retorna o conteúdo do primeiro.
//const [nome1 = 'Juliana'] = [];
//console.log(nome1);


// Adicionar atributos a um objeto já declarado
//const pessoa = {
    //nome: 'Daniel',
    //idade: 21
//}
//const pessoaComTelefone = {
    //...pessoa, telefone: 39498164
//}
//console.log(pessoa, pessoaComTelefone);

//const nome = pessoa.nome;
//console.log(nome)