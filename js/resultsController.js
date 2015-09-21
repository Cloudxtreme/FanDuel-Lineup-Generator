app.controller('resultsController', ['$scope', 'tableService', 'storageService',
function($scope, tableService, storageService) {

   $scope.lineups = 0;
   $scope.tables = tableService.tables;
   
   tableService.clearTable();

   var data = storageService.getData();
   
   function generate(i) {
      
      if(i < data.length) //if not out of bounds
      {
         if(tableService.insertRow(data[i])) //if row can be inserted
         {
            if(tableService.insertTable()) //if table is filled/valid
            {
               tableService.pop();
               generate(i+1);
            }
            else //table is not yet valid
            {
               generate(i+1);
            }
         }
         else
         {
            generate(i+1);
         }
      }
      
      return;
   }
   
   if(storageService.getData().length === 0) 
   {
      jQuery("#error-msg").fadeIn(750);
   }
   else 
   {
      jQuery("#results").fadeIn(750);  
      generate(0);
   } 
   

}]);
