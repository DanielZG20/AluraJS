/* Exemplo abaixo ele dá erro pois
   não é possível usar o this da
   classe ModuloDeImpressao dentro
   de uma função.
*/

//class ModuloDeImpressao {
    //constructor() {
        //this._codigo = 10;
    //}
    //imprime(nomes) {
        //nomes.forEach(function(nome){
        //console.log(`${this._codigo}: ${nome}`);
     //});
   //}
//}
//const professores = ['Elias', 'Yuri', 'Gabriel', 'Guilherme', 'Yan'];
//const impressao = new ModuloDeImpressao();
//impressao.imprime(professores);


/* Alterando a funcão para uma
   arrow function, o this da classe
   é possível acessá-lo */

//class ModuloDeImpressao {
    //constructor() {
        //this._codigo = 10;
    //}
    //imprime(nomes) {
        //nomes.forEach((nome) => {
            //console.log(`${this._codigo}: ${nome}`);
        //})
   //}
//}

//const professores = ['Elias', 'Yuri', 'Gabriel', 'Guilherme', 'Yan'];
//const impressao = new ModuloDeImpressao();
//impressao.imprime(professores);

/* Com a função do javascript chamada
   bind, ela avisa ao javascript para
   anular o this da function chamada
   e consequentemente irá associar
   o this da classe ModuloDeImpressao */
class ModuloDeImpressao {
    constructor() {
        this._codigo = 10;
    }
    imprime(nomes) {
        nomes.forEach(function(nome) {
        console.log(`${this._codigo}: ${nome}`);
     }.bind(this));
   }
}

const professores = ['Elias', 'Yuri', 'Gabriel', 'Guilherme', 'Yan'];
const impressao = new ModuloDeImpressao();
impressao.imprime(professores);

/* Retorno: Não precisamos declarar explicitamente o retorno quando 
   temos um bloco apenas de código, a última expressão realizada 
   vai ser o retorno da arrow function. */
const soma = (numero1, numero2) => numero1 + numero2; 
console.log(soma(3,7)); // 10

/* Nome: As Arrows functions ganham nome da variável atribuida
    quando da criação */
const arrow = () => {}
console.log(arrow.name);

/* Construtor: Não é possível criar construtores com Arrow function */
const Constructor = () => {};
new Constructor();
console.log(Constructor);