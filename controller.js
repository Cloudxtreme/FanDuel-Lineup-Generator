app.controller('lineupController', function($scope) {
   
   
   $scope.radChange = function(valu){
      console.log(valu);
      
      if(window.confirm("This will erase your current table. Continue?"))
      {
      
      }
      else
      {
         $scope.radio = ($scope.radio == "basketball" ? "football" : "basketball");
         console.log($scope.radio);
         
      }
   };
   
});