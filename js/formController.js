app.controller('formController', ['$scope', '$http', function($scope, $http) {

   $scope.radio;
   $scope.teams;
   $scope.positions;
   
   var fillForm = function(league){
      $http.get("https://raw.githubusercontent.com/NicholasPurdy/Daily-Fantasy-Lineup-Generator/master/leagues.json")
      .success(function(response){   
         $scope.teams = response[league].teams;
         $scope.positions = response[league].positions;
      });
   };
   fillForm($scope.radio);
   
   $scope.radChange = function(league){
      if(window.confirm("This will erase your current table. Continue?"))
      {
         //clearTable();
         fillForm(league);
      }
      else
      {
         $scope.radio = ($scope.radio == "NBA" ? "NFL" : "NBA");        
      }
   };
   
}]);