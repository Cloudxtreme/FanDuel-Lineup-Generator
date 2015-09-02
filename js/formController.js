app.controller('formController', ['$scope', '$http', function($scope, $http) {

   $scope.radio = 'NBA';
   $scope.name;
   $scope.team;
   $scope.position; 
   $scope.salary;
   $scope.teams; // Array containing all teams
   $scope.positions; // Array containing all positions
   
   $scope.radChange = function(){
      if(window.confirm("This will erase your current table. Continue?"))
      {
         //clearTable();
         $scope.name = "";
         $scope.salary = "";
         fillForm($scope.radio);
      }
      else
      {
         $scope.radio = ($scope.radio == "NBA" ? "NFL" : "NBA");        
      }
   };
   
   $scope.validate = function(){
      jQuery("#error-msg").hide();
      if(($scope.name === "") || (isNaN($scope.salary)))
      {
         jQuery("#error-msg").fadeIn(500);
      }
      else {
         //insert($scope.name, $scope.team, $scope.position, $scope.salary);
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
