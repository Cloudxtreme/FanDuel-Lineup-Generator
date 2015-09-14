app.controller('resultsController', ['$scope', 'tableService', 
function($scope, tableService) {

   var table = tableService.rows;
   
   if(table.length === 0) 
   {
      jQuery("#error-msg").fadeIn(750);
   }
   else 
   {
      jQuery("#results").fadeIn(750);
      console.log(tableService.league);
      generateResults(table);
   }
   
   var generateResults = function(table) {
   
   };
   
   

}]);