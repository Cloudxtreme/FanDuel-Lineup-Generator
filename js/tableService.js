app.factory('tableService', [function() {

   console.log("tableService working");
   
   var league;
   var rows = [];
   
   function row (name, team, position, salary) {
      this.name = name;
      this.team = team;
      this.position = position;
      this.salary = salary;
   }
   
   var insert = function(name, team, position, salary) {
      rows.push(new row(name, team, position, salary));
   };
   
   var clearTable = function() {
      rows.length = 0;
   };
   
   var deepCopy = function() {
      var data = rows.slice();
      for(var i = 0; i < data.length; i++)
      {
         data[i] = jQuery.extend(true, {}, data[i]);
      }  
      return data;
   };
   
   return {
      rows: rows,
      insert: insert,
      clearTable: clearTable,
      deepCopy: deepCopy
   };
   
}]);