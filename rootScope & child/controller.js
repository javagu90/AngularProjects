angular.module("myFirstApp",[])
	.run(function($rootScope)
	{
		$rootScope.nombre="RootScope";
	})
	.controller("FirstController", function($scope)
	{
		$scope.nombre="Scope";
		setTimeout(function()
		{
			$scope.$apply(function()
				{
					$scope.nombre="Actualizado";
				});
		},1000);
	})
	.controller("ChildController", function($scope)
	{
		//$scope.nombre="hijo";
	})