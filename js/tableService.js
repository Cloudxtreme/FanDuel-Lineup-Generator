app.factory('tableService', ['$http',
function($http) {
   
   var league = "NBA"; //default value, may switch to NFL
   var table = [];
   var tables = [];
   
   var salary = 0;
   var rules;
   var rulesData = {};
   
   $http.get("https://raw.githubusercontent.com/NicholasPurdy/FanDuel-Lineup-Generator/master/rules.json")
   .success(function(response) {   
      rules = response;
   });
   
   function row (name, team, position, salary) {
      this.name = name;
      this.team = team;
      this.position = position;
      this.salary = salary;
   }
   
   function aSpotIsOpenFor(position) {
      var i = 0;
   
      for(var row in table)
      {
         if(row.position === position)
         {
            i++;
         }
      }
      
      if(i < rules[position])
      {
         return true;
      }
      
      return false;
   }
   
   function insertRow(row) {
      if(row.salary + salary <= 60000 && aSpotIsOpenFor(row.position))
      {
         table.push(row);
         rulesData[row.team] += 1;
         return true;
      }
      
      return false;
   }
   
   function insertTable() {
      
   }
   
   function clearTable() {
      table.length = 0;
      tables.length = 0;
      salary = 0;
      rulesData.teams = {};
      rulesData.playersOnTeam = {};
   }
   
   function pop() {
      table.pop();
   }
   
   return {
      league: league,
      tables: tables,
      insertRow: insertRow,
      clearTable: clearTable,
      pop: pop
   }
   
}]);
