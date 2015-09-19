app.factory('storageService', [function() {

   var data = [];
   
   var clearData = function() {
      data.length = 0;
   };
   
   var getData = function() {
      return data;
   };
   
   function row (name, team, position, salary) {
      this.name = name;
      this.team = team;
      this.position = position;
      this.salary = salary;
   } 
   
   var insert = function(name, team, position, salary) {
      data.push(new row(name, team, position, salary));
   };

   return {
      clearData: clearData,
      getData: getData,
      insert: insert
   }
   
}]);
