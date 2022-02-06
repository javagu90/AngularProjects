angular.module("mainModule",[])
 .filter("removeHtml", function()
 {
 	return function(texto)
 	{
 		return String(texto).replace(/<[^>]+>/gm,'');
 	}
 })
 .controller("FiltersController",function($scope)
 {
 	$scope.miHtml="<p>Hola Mundo</p>";
 	$scope.dataJson={};
 	$scope.dataJson.title="Titulo";
 	$scope.dataJson.cuerpo="Cuerpo";
 	$scope.costo=2;
 	$scope.euros=10;
 });
