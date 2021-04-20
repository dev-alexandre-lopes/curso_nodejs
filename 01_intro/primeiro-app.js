// Primeiro programa utilizando o Node.js


console.log("Olá Node.js, Criei meu primeiro arquivo.txt") // Escrevendo no console do terminal uma mensagem!

const fs =  require ('fs');

fs.writeFileSync('ola.txt', 'Primeiro arquivo criado em Node.js');