app.factory('storageService', [function() {

   var league = "NBA";
   var data = [{"name":"Chris Paul","team":"LAC","position":"PG","salary":"5600"},{"name":"Tony Parker","team":"SAS","position":"PG","salary":"5400"},{"name":"Klay Thompson","team":"GSW","position":"SG","salary":"6000"},{"name":"James Harden","team":"HOU","position":"SG","salary":"5300"},{"name":"LeBron James","team":"CLE","position":"SF","salary":"6300"},{"name":"Kevin Durant","team":"OKC","position":"SF","salary":"5200"},{"name":"Andrew Wiggins","team":"MIN","position":"SF","salary":"5300"},{"name":"Lamar Odum","team":"LAL","position":"PF","salary":"4500"},{"name":"Greg Monroe","team":"DET","position":"PF","salary":"5500"},{"name":"Anthony Davis","team":"NOP","position":"C","salary":"5700"}]
   
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
   
   var remove = function(row) {
      for(var i = 0; i < data.length; i++)
      {
         if(data[i] === row)
         {
            data.splice(i, 1);
            return;
         }
      }
   };

   return {
      league: league,
      clearData: clearData,
      getData: getData,
      insert: insert,
      remove: remove
   }
   
}]);
