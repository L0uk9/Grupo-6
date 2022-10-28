let listagem = require('./user.json')
let listarMaiorDezoito = () => listagem.filter((pessoas) => pessoas.idade > 18)
console.log(listarMaiorDezoito())