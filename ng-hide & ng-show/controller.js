angular.module("myFirstApp",[])

 .controller("FirstController",function($scope,$http)
 {
 	$scope.posts=[];
 	$scope.loading=true;

 	$http.get("http://jsonplaceholder.typicode.com/poss")
 		.success(function(data)
 		{
 			console.log(data);
 			$scope.posts=data;
 			$scope.loading=false;
 		})
 		.error(function(err)
 		{
 			$scope.loading=false;
 			console.log(err);
 		});
 });
