app.factory('storageService', [function() {

   var league = "NBA";
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
