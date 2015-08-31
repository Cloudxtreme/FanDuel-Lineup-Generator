app.controller('formController', ['$scope', function($scope) {
   
   //$scope.fillForm($scope.radio);
   
   $scope.radChange = function(sport){
      if(window.confirm("This will erase your current table. Continue?"))
      {
         //clearTable();
         //fillForm(sport);
      }
      else
      {
         $scope.radio = ($scope.radio == "basketball" ? "football" : "basketball");        
      }
   };
   
   $scope.fillForm = function(sport){
      //get json, fill form
      console.log(sport);
   };
   
}]);