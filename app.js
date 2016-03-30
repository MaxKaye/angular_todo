"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("vm", TodoController );

  function TodoController($scope){
    $scope.data = data;
    $scope.create =function(){
      console.log($scope.new_task);
    }
    // vm.sort_data_by = function(task){
    //   vm.sort_on = task;
    //   vm.is_ascending = !(vm.is_ascending);
    // };
    //   vm.total_time = function(){
    //   var total = 0;
    //   vm.data.forEach(function(todo){
    //     if(todo.people_requested){
    //       total += (todo.people_requested * todo.completion_time);
    //     }
    //   });
    //   return total.toFixed(2);
    // }
  }
  })();
