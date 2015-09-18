app.factory('tableService', [function() {
   
   var league;
   var table = [];
   
   function row (name, team, position, salary) {
      this.name = name;
      this.team = team;
      this.position = position;
      this.salary = salary;
   }
   
   var insert = function(name, team, position, salary) {
      table.push(new row(name, team, position, salary));
   };
   
   var clearTable = function() {
      table.length = 0;
   };
   
   var deepCopy = function() {
      var data = table.slice();
      for(var i = 0; i < data.length; i++)
      {
         data[i] = jQuery.extend(true, {}, data[i]);
      }  
      return data;
   };
   
   return {
      league: league,
      table: table,
      insert: insert,
      clearTable: clearTable,
      deepCopy: deepCopy
   };
   
}]);