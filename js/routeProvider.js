app.config(['$routeProvider', function($routeProvider) {

   $routeProvider.when('/', {
      controller: 'formController',
      template: ''
   });

  $routeProvider.when('/results', {
    controller: 'resultsController',
    template: '<h2>We are home</h2>'
  });
}]);