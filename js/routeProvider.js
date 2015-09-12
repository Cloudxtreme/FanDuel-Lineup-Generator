app.config(function($routeProvider) {

   $routeProvider.when('/', {
      controller: 'formController',
      templateUrl: 'file:///C:/Users/Nick/Documents/GitHub/Daily-Fantasy-Lineup-Generator/form.html'
   })
   .otherwise({redirectTo: '/'});
  
});