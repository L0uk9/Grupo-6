// Responsável por criar a função de adicionar um usuário
import usuario from "./user.json";
const adicionarUsuario = (usuario) => {
  const { nome, idade, sexo, email, telefone } = usuario;

  const usuarioParaAdicionar = { ...usuario };

  usuario.push(usuarioParaAdicionar);

  return usuarioParaAdicionar;
};

adicionarUsuario({
  nome: "Bla Bla",
  idade: 30,
  sexo: "F",
  email: "blabla@gmail.com",
  telefone: "999999999",
});
