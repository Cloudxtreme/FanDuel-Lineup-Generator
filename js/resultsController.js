app.controller('resultsController', ['$scope', 'tableService', 'storageService',
function($scope, tableService, storageService) {

   $scope.lineups = 0;
   $scope.tables = [];
   
   tableService.clearTable();

   var data = storageService.getData();
   
   
   if(storageService.getData().length === 0) 
   {
      jQuery("#error-msg").fadeIn(750);
   }
   else 
   {
      jQuery("#results").fadeIn(750);  
      if(tableService.league === "NFL")
      {
         generateNFL(data[0]);
      }
      else
      {
         generateNBA(data[0]);
      }
   } 
   

}]);
