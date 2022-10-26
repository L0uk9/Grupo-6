//findIndex

// Responsável por criar a função de remover um usuário

const usuarios = require("./user.json");

let removerUsuario = (idUsuario) =>{
    let usuarioIndex = usuarios.findIndex((usuario)=> usuario.id == idUsuario) 
    if (usuarioIndex > -1){
        usuarios.splice(usuarioIndex, 1);
    };
    console.log(usuarios)
};
removerUsuario(10)




















