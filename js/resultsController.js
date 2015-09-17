app.controller('resultsController', ['$scope', 'tableService', 
function($scope, tableService) {

   var data = tableService.deepCopy();
   
   if(data.length === 0) 
   {
      jQuery("#error-msg").fadeIn(750);
   }
   else 
   {
      jQuery("#results").fadeIn(750);
      generateResults(data);
   }
   
   var generateResults = function(data) {
      
   };
   
   

}]);