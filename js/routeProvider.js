app.config(function($routeProvider) {

   $routeProvider.when('/', {
      controller: 'formController',
      templateUrl: 'form.html'
   })
   .otherwise({redirectTo: '/'});
   
   $routeProvider.when('/results', {
      controller: 'resultsController',
      templateUrl: 'results.html'
   });
  
});
