app.controller('formController', ['$scope', '$http', 'tableService',
function($scope, $http, tableService) {

   jQuery("#infoForm").fadeIn(750);

   // radio button
   $scope.radio = 'NBA';
   
   // form values
   $scope.name;
   $scope.team;
   $scope.position; 
   $scope.salary;
   
   // Array containing all teams in select box
   $scope.teams;
   
   // Array containing all positions in select box
   $scope.positions; 
   
   // the table
   $scope.table = tableService.table; 
   
   // called when user changes radio button (NBA or NFL)
   $scope.radChange = function() {
      if(window.confirm("This will erase your current table. Continue?")) 
      {
         tableService.clearTable();
         jQuery("#error-msg").hide();
         fillForm($scope.radio);
      }
      else 
      {
         $scope.radio = ($scope.radio == "NBA" ? "NFL" : "NBA");        
      }
   };
   
   $scope.validateForm = function() {
      jQuery("#error-msg").fadeOut();
      if(($scope.name === "") || (isNaN($scope.salary) || ($scope.salary === ""))) 
      {
         jQuery("#error-msg").fadeIn(500);
      }
      else 
      {
         tableService.insert($scope.name, $scope.team, $scope.position, $scope.salary);
         resetForm();
      }        
   };
   
   var fillForm = function(league) {
      $http.get("https://raw.githubusercontent.com/NicholasPurdy/Daily-Fantasy-Lineup-Generator/master/leagues.json")
      .success(function(response) {   
         $scope.teams = response[league].teams;
         $scope.positions = response[league].positions;
         tableService.league = league;
         resetForm();
      });
   };
   fillForm($scope.radio);
   
   var resetForm = function() {
      $scope.name = "";
      $scope.salary = "";
      $scope.team = $scope.teams[0];
      $scope.position = $scope.positions[0];
   };
 
}]);
