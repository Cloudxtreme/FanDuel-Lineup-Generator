app.factory('tableService', [
function() {
   
   var league;
   var table = [];
   var tables = [];
   var rules;
   
   function setLeague(l) {
      league = l;
   }
   
   function setRules(r) {
      rules = r;
   }
   
   function getTables() {
      return tables;
   }
   
   function salaryCapRule(playerSalary) {
      var tableSalary = 0;   
      for(var i = 0; i < table.length; i++)
      {      
         tableSalary += Number(table[i].salary);
      }   
      return (tableSalary + Number(playerSalary) <= 60000)   
   }
   
   function aSpotIsOpenFor(position) {
      var j = 0; 
      for(var i = 0; i < table.length; i++)
      {
         if(position === table[i].position)
         {
            j++;
         }
      }    
      return(j < rules[league][position]);
   } 

   function threeTeamsRule() {
      var teams = {};
      for(var i = 0; i < table.length; i++)
      {
         teams[table[i].team] = 0;
      }
      return (Object.keys(teams).length >= 3);
   }
   
   function fourOrLessRule() {
      var tableOfTeams = {};
      for(var i = 0; i < table.length; i++)
      {
         if(tableOfTeams.hasOwnProperty(table[i].team))
         {
            tableOfTeams[table[i].team]++;
         }
         else
         {
            tableOfTeams[table[i].team] = 1;
         }
      }
      for(var team in tableOfTeams)
      {
         if(tableOfTeams.hasOwnProperty(team) && tableOfTeams[team] > 4)
         {
            return false;
         }
      }
      
      return true;
   }
   
   function noSpotsOpen() {
      return (table.length === 9);
   }
   
   function row (name, team, position, salary) {
      this.name = name;
      this.team = team;
      this.position = position;
      this.salary = salary;
   }   
   
   function insertRow(row) {
      if(salaryCapRule(row.salary) && aSpotIsOpenFor(row.position))
      {
         table.push(row);
         return true;
      }     
      return false;
   }
   
   function insertTable() {
      if(noSpotsOpen() && threeTeamsRule() && fourOrLessRule())
      {  
         tables.push(jQuery.extend(true, {}, table));
         return true;
      }    
      return false;
   }
   
   function pop() {
      table.pop();
   }
   
   function clearTable() {
      table.length = 0;
      tables. length = 0;
   }
   
   return {
      setLeague: setLeague,
      setRules: setRules,
      getTables: getTables,
      insertRow: insertRow,
      insertTable: insertTable,
      pop: pop,
      clearTable: clearTable
   }
   
}]);
