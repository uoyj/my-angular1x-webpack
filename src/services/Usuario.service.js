import Usuario from "./Usuario"

export default class UsuarioService{
    constructor($q, $timeout){
        this.$timeout = $timeout;
        this._Usuario = new Usuario();
    }

    get Usuario(){
        return this.$timeout(()=>{
            this._Usuario.Nome = "Jhonatan";
            this._Usuario.Departamento = "TI";
            this._Usuario.Idade = 25;
            return this._Usuario;
        }, 1000)
    }
}
UsuarioService.$inject = ['$q', '$timeout'];