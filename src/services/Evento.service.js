import Evento from "./Evento"

export default class EventoService{
    constructor($http){
        this.$http = $http;
        this._Eventos = [];
    }

    get Eventos(){
        return this.$http.get("src/resources/eventos.json")
                .then((eventos)=>{
                    this._Eventos = eventos.data.map((evento)=> new Evento(evento));
                    return this._Eventos;
                });
    }
}
EventoService.$inject = ["$http"];