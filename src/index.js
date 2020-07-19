import './styles/main.scss';

/*MODULE*/
import ngModule from './app/app.module'
import config from './app/app.config'

/*SERVICES*/
import UsuarioService from './services/Usuario.service'
import EventoService from './services/Evento.service'

/*PAGE CONTROLLERS*/
import AppController from './app/app.controller'
import EventosComponent from './pages/eventos/eventos.controller'

ngModule.config(["$routeProvider", config]);
ngModule.controller('AppController', AppController);
ngModule.component('eventosComponent', EventosComponent);
ngModule.factory('UsuarioService', UsuarioService);
ngModule.factory('EventoService', EventoService);