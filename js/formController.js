app.controller('formController', ['$scope', '$http', 'storageService', 
function($scope, $http, storageService) {

   // radio button
   $scope.radio = storageService.league;
   
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
   $scope.table = storageService.getData();
   
   // called when user changes radio button (NBA or NFL)
   $scope.radChange = function() {
      if(window.confirm("This will erase your current table. Continue?")) 
      {
         storageService.clearData();
         jQuery("#error-msg").hide();
         fillForm($scope.radio);
      }
      else 
      {
         $scope.radio = ($scope.radio == "NBA" ? "NFL" : "NBA");        
      }
   };
   
   $scope.validateForm = function() {
      jQuery("#error-msg").slideUp(500);
      if(($scope.name === "") || (isNaN($scope.salary) || ($scope.salary === ""))) 
      {
         jQuery("#error-msg").slideDown(500);
      }
      else 
      {
         storageService.insert($scope.name, $scope.team, $scope.position, $scope.salary);
         resetForm();
      }        
   };
   
   $scope.remove = function(row) {
      storageService.remove(row);      
   };
   
   var resetForm = function() {
      $scope.name = "";
      $scope.salary = "";
      $scope.team = $scope.teams[0];
      $scope.position = $scope.positions[0];
   };   
   
   var fillForm = function(league) {
      $http.get("https://raw.githubusercontent.com/NicholasPurdy/FanDuel-Lineup-Generator/master/leagues.json")
      .success(function(response) {   
         $scope.teams = response[league].teams;
         $scope.positions = response[league].positions;
         storageService.league = league;
         resetForm();
         jQuery("#infoForm").fadeIn(750);
      });
   };
   fillForm($scope.radio);
 
}]);
