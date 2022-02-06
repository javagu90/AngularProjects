angular.module("ToDoList",["LocalStorageModule"])
.service("toDoService", function(localStorageService)
{
	this.key="angular-todolist";

	if(localStorageService.get(this.key))
	{
		this.activities=localStorageService.get(this.key)
	}
	else
	{
		this.activities=[];
	}

	this.add= function(newActv)
	{
		this.activities.push(newActv);
		this.updateLocalStorage();
	}

	this.updateLocalStorage=function()
	{
		localStorageService.set(this.key, this.activities);
	}

	this.clean= function()
	{
		this.activities=[];
		this.updateLocalStorage();
		return this.getAll();

	}

	this.getAll=function()
	{
		return this.activities;
	}

	this.removeItem= function(item)
	{
		this.activities=this.activities.filter(
			function(activity)
			{
				return activity !== item;
			});
				this.updateLocalStorage();
				return this.getAll();

	}
})
.controller("ToDoController", 
	function($scope,toDoService)
{
	$scope.toDo = toDoService.getAll();
	$scope.newActv = {};
	$scope.addActv= function()
	{
		toDoService.add($scope.newActv);
		$scope.newActv ={};
		//localStorageService.set("angular-todolist", $scope.toDo);
	}

	$scope.removeActv=function(item)
	{
		$scope.toDo= toDoService.removeItem(item);
	}

	$scope.clean=function()
	{
		$scope.toDo = toDoService.clean();
	}
});