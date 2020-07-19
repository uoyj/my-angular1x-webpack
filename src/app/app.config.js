export default function config ($routeProvider) {
  $routeProvider.
    when('/eventos', {
      template: '<eventos-component></eventos-component>'
    }).
    when('/eventos/:eventoId', {
      template: '<evento-detail></evento-detail>'
    }).
    otherwise('/eventos');
}