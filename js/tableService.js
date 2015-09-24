app.factory('tableService', [function() {
   
   var league = "NBA"; //default value, may switch to NFL
   var table = [];
   var tables = [];
   
   var salary = 0;
   var rulesData = {
      teams: {},
      playersOnTeam: {}
   };
   
   function row (name, team, position, salary) {
      this.name = name;
      this.team = team;
      this.position = position;
      this.salary = salary;
   }
   
   function insertRow(row) {
      if(row.salary + salary <= 60000)
      {
         for (var teamUsed in rulesData.teams)
         {
            if(rulesData.teams.hasOwnProperty(teamUsed) &&
            teamUsed < 3)
            {
               return false;
            }
         }
         
         for (var playersPerTeam in rulesData.playersOnTeam)
         {
            if(rulesData.playersOnTeam.hasOwnProperty(playersPerTeam) &&
            playersPerTeam > 4)
            {
               return false;
            }
         }
      
         table.push(row);
         rulesData.teams[row.team] += 1;
         rulesData.playersOnTeam[row.team] += 1;
         return true;
      }
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
