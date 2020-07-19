class EventosController {
    constructor(EventoService){
        EventoService.Eventos.then((eventos)=>{
            this._eventos = eventos;
        });
    }

    get eventos(){
        return this._eventos; 
    }

    $onInit(){
    }

    $onChanges(changesObj){
    }

    $onDestroy(){

    };
}

EventosController.$inject = ["EventoService"];

const EventosComponent = {
    templateUrl:'src/pages/eventos/eventos.template.html',
    controller: EventosController,
    controllerAs: 'vm',
    /* bindings: {
        Binding: '=',
    } */
}

export default EventosComponent;