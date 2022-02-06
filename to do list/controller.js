angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController", 
	function($scope, localStorageService)
{
	if(localStorageService.get("angular-todolist"))
	{
		$scope.toDo=localStorageService.get("angular-todolist")
	}
	else
	{
		$scope.toDo=[];
	}
	$scope.$watch(function(){
		return $scope.newActv;
	},function(newValue,oldValue){
		console.log(newValue);
		console.log(oldValue);

	})
	$scope.$watchCollection("toDo", function(newValue, oldValue)
	{
		console.log("WatchCollection");
		localStorageService.set("angular-todolist", $scope.toDo);
	}
	);
	$scope.addActv= function()
	{
		$scope.toDo.push($scope.newActv);
		$scope.newActv ={};
		//localStorageService.set("angular-todolist", $scope.toDo);
	}
	$scope.clean=function()
	{
		$scope.toDo=[];	
	    //localStorageService.set("angular-todolist", $scope.toDo);
	
	}
});