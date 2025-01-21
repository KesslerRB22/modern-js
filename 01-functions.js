//normal function 

function minhaFunction() {
    this.name = 'Kessler';

    const minhaArrowFunction = () => {
       this.lastname = 'Barreto';
    };
    
    minhaArrowFunction();
}

console.log(new minhaFunction());
console.log(this);
*/


//Adicionar valores de forma dinamica 
function soma () {
    console.log(Object.values(arguments));
} 

soma(1, 2, 3, 4, 5, 6);


//Adicionando valores de forma dinamica com Rest operators
function soma (primeiroParametro, ...argumentos) {
    console.log({primeiroParametro})
    console.log({argumentos});
} 

soma(1, 2, 3, 4, 5, 6);
*/

//Short syntax
const algumNumero = 10;

const getUser = () => ({
    id: '123',
    name: 'Kessler'
});

console.log(getUser());
