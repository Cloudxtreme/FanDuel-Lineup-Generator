app.controller('formController', ['$scope', '$http', function($scope, $http) {

   $scope.radio; // NBA or NFL
   $scope.name;
   $scope.team;
   $scope.position; 
   $scope.salary;
   $scope.teams; // Array containing all teams
   $scope.positions; // Array containing all positions
   
   $scope.radChange = function(league){
      if(window.confirm("This will erase your current table. Continue?"))
      {
         //clearTable();
         $scope.name = "";
         $scope.salary = "";
         fillForm(league);
      }
      else
      {
         $scope.radio = ($scope.radio == "NBA" ? "NFL" : "NBA");        
      }
   };
   
   var fillForm = function(league){
      $http.get("https://raw.githubusercontent.com/NicholasPurdy/Daily-Fantasy-Lineup-Generator/master/leagues.json")
      .success(function(response){   
         $scope.teams = response[league].teams;
         $scope.positions = response[league].positions;   
         $scope.team = response[league].teams[0];
         $scope.position = response[league].positions[0];
      });
   };
   fillForm($scope.radio);
 
}]);
