/*
Javascript basics:

1) Weakly Typed Language :
    a) No explicit type assignment;
    b) Data types can be switched dynamically;

2) Object-Oriented Language:
    a) Data can be organized in logical objects;
    b) Primitives and reference types;

3) Versalite Language:
    a) Runs in browser & directly on a PC/Server;
    b) Can perform a broad variety of tasks;
*/

//Revisão sobre JavaScript:

//Global Variables:
const nome = "Paul"; 
let idade = 29;
const hasHobbies = true;
idade = 35;

//Function expression:
function summarizeUser(userName, userAge, userHobbies){
    return(
        `O nome do usuário é ${userName}, possui ${userAge} anos de idade e possui Hobbies: ${userHobbies}`
    )
}

// Exemplo de Arrow Function:
const funcUser = (userName, userAge, userHobbies) => {
    return(
        `O nome do usuário é ${userName}, possui ${userAge} anos de idade e possui Hobbies: ${userHobbies}`
    )
}

//Exemplo de uma Arrow Function com somente uma sentença:

const soma = (a,b) => a + b;

//Exemplo de uma Arrow Function com somente um argumento:

const somaOne = a => a + 1;

//Exemplo de uma Arrow Function sem argumento:

const somaRandom = () => 2 + 4;

console.log(somaRandom());

console.log(somaOne(2));

console.log(soma(2,3));

console.log(summarizeUser(nome, idade, hasHobbies));

console.log(funcUser(nome, idade, hasHobbies));

console.log("**********************************************************************************************************************")

//Exemplos de Objetos:

//Usando Function para o contexto local no objeto
const pessoa = {
    nome: "João",
    idade: 32,
    sexo: "Masculino",
    greet: function(){
        console.log(`Olá meu nome é ${this.nome}!`)
    }
};

pessoa.greet();
console.log(pessoa);
const copiedPerson = {...pessoa}; // Spread operator
console.log(copiedPerson);
console.log("**********************************************************************************************************************")

//Exemplo de Arrays:

const hobbies = ["Sports", "Cokkies", "Write"];
//for (let hobby of hobbies){
//    console.log(hobby);
//}

console.log (hobbies.map(hobby => 'Hobby:' + hobby));//Usando o método map() para criar um novo array com uma chamda de função para cada elemento 
console.log(hobbies);

hobbies.push("Programming");//Incluindo novo elemento no array;
console.log (hobbies);

//const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];// Spread Operator: Copiando array para outro
console.log(copiedArray);

const toArray = (...args) => {
    return args
}
console.log(toArray(1,2,3,4));// Exemplo de Rest Operator;
console.log("**********************************************************************************************************************")

// Destructuring:

//Criada uma função para imprimir a propriedade nome do objeto pessoa
const printNome = (personData) => {
    console.log(personData.nome);
}
printNome(pessoa);

//Mesmo exemplo anterior agora usando a desestruturação:
const printNome2 = ({nome}) => {
    console.log(nome);
}
printNome2(pessoa);

//Exemplo de desestruturação de um array:
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);


