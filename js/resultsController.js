app.controller('resultsController', ['$scope', '$http', 'tableService', 'storageService',
function($scope, $http, tableService, storageService) {

   $scope.lineups = 0;
  
   var data = storageService.getData();
   
   function generate(i) {
      
      if(i < data.length) //if not out of bounds
      {
         if(tableService.insertRow(data[i])) //if row can be inserted
         {
            if(tableService.insertTable()) //if table is filled/valid
            {
               $scope.lineups++;
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
      $http.get("https://raw.githubusercontent.com/NicholasPurdy/FanDuel-Lineup-Generator/master/rules.json")
      .success(function(response) {   
         tableService.setRules(response.rules);
         tableService.setLeague(storageService.league);
         jQuery("#results").fadeIn(750);  
         generate(0);
         $scope.tables = tableService.getTables();
      });
   } 
   
}]);
