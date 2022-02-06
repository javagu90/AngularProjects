angular.module("MyFirstApp", [])
.controller("FirstController", function($scope)
{
	$scope.nombre="Javier";
	$scope.nuevoComentario={};
	$scope.comentarios=[
	{
		comentario: "Buen tuto",
		username: "CF"
	},
	{
		comentario: "mAL tuto",
		username: "OTRO"	
	}
	];
	$scope.agregarComentario=function()
	{
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario={};
	}
});