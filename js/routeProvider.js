app.config(function($routeProvider) {

   console.log("routeProvider working");

   $routeProvider.when('/', {
      controller: 'formController',
      templateUrl: 'file:///C:/Users/Nick/Documents/GitHub/Daily-Fantasy-Lineup-Generator/form.html'
   })
   .otherwise({redirectTo: '/'});
   
   $routeProvider.when('/results', {
      controller: 'resultsController',
      templateUrl: 'file:///C:/Users/Nick/Documents/GitHub/Daily-Fantasy-Lineup-Generator/results.html'
   });
  
});