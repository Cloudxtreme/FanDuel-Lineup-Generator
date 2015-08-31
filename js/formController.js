app.controller('formController', ['$scope', '$http', function($scope, $http) {

   $scope.radio = "basketball";
   $scope.teams;
   $scope.positions;
   
   var fillForm = function(sport){
      $http.get("https://raw.githubusercontent.com/NicholasPurdy/Daily-Fantasy-Lineup-Generator/master/leagues.json")
      .success(function(response){
         if(sport === "basketball")
         {
            $scope.teams = response[0].teams;
            $scope.positions = response[0].positions;
         }
         else
         {
            $scope.teams = response[1].teams;
            $scope.positions = response[1].positions;
         }
      });
   };
   fillForm($scope.radio);
   
   $scope.radChange = function(sport){
      if(window.confirm("This will erase your current table. Continue?"))
      {
         //clearTable();
         fillForm(sport);
      }
      else
      {
         $scope.radio = ($scope.radio == "basketball" ? "football" : "basketball");        
      }
   };
   
}]);