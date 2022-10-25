// Responsável por criar a função de adicionar um usuário
const usuario = require("./user.json");
const adicionarUsuario = (usuario) => {
  const { nome, idade, sexo, email, telefone } = usuario;

  const usuarioParaAdicionar = { ...usuario };

  usuario.push(usuarioParaAdicionar);

  return usuarioParaAdicionar;
};
