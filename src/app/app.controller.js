export default class AppController {
    constructor(UsuarioService){
        UsuarioService.Usuario.then((usuario)=>{
            this._usuario = usuario;
        });
    }

    get usuario(){
        return this._usuario;
    }
}

AppController.$inject = ["UsuarioService"];