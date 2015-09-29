app.controller('resultsController', ['$scope', '$http', 'tableService', 'storageService',
function($scope, $http, tableService, storageService) {
   
   function generate(i) {  
   
      if(i < data.length) 
      {
         if(tableService.insertRow(data[i]))
         {
            if(tableService.insertTable())
            {
               $scope.lineups++;
               tableService.pop();
               generate(i+1);
               return;
            }
            else
            {
               generate(i+1);
            }         
         }
         else
         {

         }  
         
      }
 
   }
   
   var data = storageService.getData();
   
   if(storageService.getData().length === 0) 
   {
      jQuery("#error-msg").fadeIn(750);
   }
   else
   {
      $http.get("https://raw.githubusercontent.com/NicholasPurdy/FanDuel-Lineup-Generator/master/rules.json")
      .success(function(response) {   
         tableService.setRules(response.rules);
         tableService.setLeague(storageService.league);
         jQuery("#results").fadeIn(750);
         tableService.clearTable();     
         $scope.lineups = 0;
         generate(0);
         $scope.tables = tableService.getTables();
      });
   } 
   
}]);
