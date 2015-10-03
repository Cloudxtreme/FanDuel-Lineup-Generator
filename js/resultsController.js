app.controller('resultsController', ['$scope', '$http', 'tableService', 'storageService',
function($scope, $http, tableService, storageService) {
   
   function generate(i=0) {  
      if(i >= data.length) return;
      
      if(tableService.insertRow(data[i]))
      { 
         if(tableService.insertTable())
         {
            $scope.lineups++;
            tableService.pop();
         } 
         else
         {
            generate(i+1);
            tableService.pop();
         }
      }
      generate(i+1);      
   }
   
   var data = storageService.getData();
   
   if(data.length === 0) 
   {
      jQuery("#error-msg").fadeIn(1000);
   }
   else
   {
      $http.get("https://raw.githubusercontent.com/NicholasPurdy/FanDuel-Lineup-Generator/master/rules.json")
      .success(function(response) {   
         tableService.setRules(response.rules);
         tableService.setLeague(storageService.league);
         tableService.clearTable();     
         $scope.lineups = 0;
         
         generate();
         $scope.tables = tableService.getTables();
         jQuery("#results").fadeIn(1000);  
           
      });
   } 
   
}]);
