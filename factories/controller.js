angular.module("ToDoList",["LocalStorageModule"])
.factory("toDoFactory", function(localStorageService)
{
	var toDoFactory = {} ;

	toDoFactory.key="angular-todolist";

	if(localStorageService.get(toDoFactory.key))
	{
		toDoFactory.activities=localStorageService.get(toDoFactory.key)
	}
	else
	{
		toDoFactory.activities=[];
	}

	toDoFactory.add= function(newActv)
	{
		toDoFactory.activities.push(newActv);
		toDoFactory.updateLocalStorage();
	}

	toDoFactory.updateLocalStorage=function()
	{
		localStorageService.set(toDoFactory.key, toDoFactory.activities);
	}

	toDoFactory.clean= function()
	{
		toDoFactory.activities=[];
		toDoFactory.updateLocalStorage();
		return toDoFactory.getAll();

	}

	toDoFactory.getAll=function()
	{
		return toDoFactory.activities;
	}

	toDoFactory.removeItem= function(item)
	{
		toDoFactory.activities=toDoFactory.activities.filter(
			function(activity)
			{
				return activity !== item;
			});
				toDoFactory.updateLocalStorage();
				return toDoFactory.getAll();

	}

	return toDoFactory;
})
.controller("ToDoController", 
	function($scope,toDoFactory)
{
	$scope.toDo = toDoFactory.getAll();
	$scope.newActv = {};
	$scope.addActv= function()
	{
		toDoFactory.add($scope.newActv);
		$scope.newActv ={};
		//localStorageService.set("angular-todolist", $scope.toDo);
	}

	$scope.removeActv=function(item)
	{
		$scope.toDo= toDoFactory.removeItem(item);
	}

	$scope.clean=function()
	{
		$scope.toDo = toDoFactory.clean();
	}
});