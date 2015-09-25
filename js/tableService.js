app.factory('tableService', ['$http',
function($http) {
   
   var league = "NBA"; //default value, may switch to NFL
   var table = [];
   var tables = [];
   
   var salary = 0;
   var rules;
   
   $http.get("https://raw.githubusercontent.com/NicholasPurdy/FanDuel-Lineup-Generator/master/rules.json")
   .success(function(response) {   
      rules = response;
   });
   
   function getSalary() {
      var salary = 0;
      
      for(var i = 0; i < table.length; i++)
      {      
         salary += table[i].salary;
      }   
      return salary;   
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
      return(j < rules[position]);
   } 

   function teamsRepresented() {
      var teams = {};
      for(var i = 0; i < table.length; i++)
      {
         teams[table[i].team];
      }
      return (Object.key(teams).length);
   }
   
   function fourOrLessRule() {
      var playersOnTeam = {};
      for(var i = 0; i < table.length; i++)
      {
         if(playersOnTeam.hasOwnProperty(table[i].team))
         {
            playersOnTeam[table[i].team]++;
         }
         else
         {
            playersOnTeam[table[i].team] = 1;
         }
      }
      for(var team in playersOnTeam)
      {
         if(playersOnTeam.hasOwnProperty(team) && team > 4)
         {
            return false;
         }
      }
      
      return true;
   }
   
   function row (name, team, position, salary) {
      this.name = name;
      this.team = team;
      this.position = position;
      this.salary = salary;
   }   
   
   function insertRow(row) {
      if(((row.salary + getSalary()) <= 60000) && (aSpotIsOpenFor(row.position)))
      {
         table.push(row);
         return true;
      }     
      return false;
   }
   
   function insertTable() {
      if((teamsRepresented() >= 3) && fourOrLessRule())
      {  
         tables.push(table);
         return true;
      }    
      return false;
   }
   
   function clearTable() {
      table.length = 0;
      tables.length = 0;
   }
   
   function pop() {
      table.pop();
   }
   
   return {
      league: league,
      tables: tables,
      insertRow: insertRow,
      insertTable: insertTable,
      clearTable: clearTable,
      pop: pop
   }
   
}]);
