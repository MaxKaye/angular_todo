"use strict";

(function(){
  angular
  .module("todo", [])
  .controller("todo_controller", TodoController );

  function TodoController(){
    var vm = this;
    vm.data = data;
    vm.total_time = function(){
      var total = 0;
      vm.data.forEach(function(todo){
        if(todo.people_requested){
          total += (todo.people_requested * todo.completion_time);
        }
      });
      return total.toFixed(2);
    }
  }
  })();
