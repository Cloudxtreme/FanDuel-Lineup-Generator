app.factory('tableService', [function() {

   console.log("tableService working");
   
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
   
   return {
      rows: rows,
      insert: insert,
      clearTable: clearTable
   };
   
}]);