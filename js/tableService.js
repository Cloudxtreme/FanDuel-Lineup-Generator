app.factory('tableService', [function() {
   
   var league = "NBA";
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
   
   var setData = function(d) {
      table = d.slice();
      for(var i = 0; i < data.length; i++)
      {
         table[i] = jQuery.extend(true, {}, table[i]);
      }  
   };
   
   return {
      league: league,
      insert: insert,
      clearTable: clearTable,
      setData: setData
   }
   
}]);
